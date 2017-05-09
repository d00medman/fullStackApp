'use strict'

const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const addMovieTemplate = require('../templates/add-movie.handlebars')
const movieTitle = require('../templates/movie-title.handlebars')
const omdbOutput = require('../templates/omdb-output.handlebars')

const api = require('./api')
const getFormFields = require(`../../../lib/get-form-fields`)

const validate = (input) => {
  if (/[a-z]/.test(input.toLowerCase()) === false) { return false }
  return true
}

const destroySuccess = (response) => {
  $('.core-alert').text('You have removed an item from your list of favorites')
  $(response.target).parent().remove()
}

const destroyFailure = (error) => {
  $('.core-alert').text('Sorry, we were unable to remove your selected movie')
}

// current implementation of destroy method.
// Needs to inhabit ui file becuase I don not know how to link to the events file and make onDestroy work.
const destroy = (event) => {
  event.preventDefault()
  const targ = $(event.target).attr('data-id')
  api.destroy(targ)
    .then(destroySuccess(event))
    .catch(destroyFailure)
}

const updateSuccess = (response, data) => {
  const targ = $(response.target).attr('data-id')
  const title = movieTitle({ movie: data.movie })
  $(response.target).siblings('h5').text(title)
  $('.core-alert').text('You have changed one of your favorites')
  document.getElementById(targ).reset()
}

const updateFailure = (error) => {
  $('.core-alert').text('What should we change this item to?')
}

const update = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const targ = $(event.target).attr('data-id')
  if (validate(data.movie.title) === true) {
    api.update(data, targ)
      .then(updateSuccess(event, data))
      .catch(updateFailure())
  } else {
    updateFailure()
  }
}

const createSuccess = (response) => {
  const title = movieTitle({ movie: response.movie })
  $('.core-alert').text('You have added ' + title + ' to your list of favorites')
  const showMoviesHtml = addMovieTemplate({ movie: response.movie })
  $('.content').append(showMoviesHtml)
  $('.destroy').on('submit', destroy)
  $('.update').on('submit', update)
  document.getElementById('create').reset()
}

const createFailure = (error) => {
  $('.core-alert').text('Please give us a movie to create!')
}

// creates a handlebars manifestation of the list of favorite movies
const indexSuccess = (response) => {
  const showMoviesHtml = showMoviesTemplate({ movies: response.movies })
  $('.content').append(showMoviesHtml)
  $('.destroy').on('submit', destroy)
  $('.update').on('submit', update)
}

const indexFailure = (error) => {
  $('.core-alert').text('Sorry, we were unable to retrieve your favorites!')
}

const showSuccess = (response) => {}

const showFailure = (error) => {}

const omdbGetSuccess = (response) => {
  const output = omdbOutput({ movie: response }) // This could fail => could be passing the wrong data through to handlebars
  $('.omdb-output').html(output)
  document.getElementById('omdb').reset()
}

const omdbGetFailure = (error) => {
  $('.omdb-output').html('Could not access the OMDB, please try again.')
}

module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  indexFailure,
  showSuccess,
  showFailure,
  validate,
  omdbGetSuccess,
  omdbGetFailure
  // destroySuccess,
  // destroyFailure, // unsure of wether these should be deleted or not.
  // updateSuccess,
  // updateFailure
}
