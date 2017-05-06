'use strict'

const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const addMovieTemplate = require('../templates/add-movie.handlebars')
const movieTitle = require('../templates/movie-title.handlebars')

const api = require('./api')
const getFormFields = require(`../../../lib/get-form-fields`)

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
  const title = movieTitle({ movie: data.movie })
  $(response.target).siblings('h5').text(title)
  $('.core-alert').text('You have changed one of your favorites')
  document.getElementById('update').reset()
}
// There is an odd behavioral quirk going on in this method. For whatever reason, when you sign out, then sign in again, any items which have been patched are now at the bottom of the list.

const updateFailure = (error) => {
  $('.core-alert').text('Sorry, we were unable to change this item.')
  // going to want to build an update alert into my handlebars html
}

const update = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  const targ = $(event.target).attr('data-id')
  console.log(targ)
  api.update(data, targ)
    .then(updateSuccess(event, data))
    .catch(updateFailure)
}

const test = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const targ = $(event.target).attr('data-id')
  console.log(data)
  console.log(targ)
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
  $('.core-alert').text('Sorry, we were unable to create your movie!')
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

const showSuccess = (response) => {
  // burndown
  console.log('success')
  console.log(response)
  // burndown
}

const showFailure = (error) => {
  // burndown
  console.log('failed to show')
  // burndown
}

module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  indexFailure,
  showSuccess,
  showFailure,
  // destroySuccess,
  // destroyFailure, // unsure of wether these should be deleted or not.
  updateSuccess,
  updateFailure
}
