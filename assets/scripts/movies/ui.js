'use strict'

const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const addMovieTemplate = require('../templates/add-movie.handlebars')

const api = require('./api')
const getFormFields = require(`../../../lib/get-form-fields`)

// Both of these methods have been rendered superflous by creation of destroy method in this file. destroySuccess has a good chance of being uncommented because it is useful for its alert functionality

const destroySuccess = (response) => {
  console.log(response)
  $('.core-alert').text('You have removed a movie from your list of favorites')
  $(response.target).parent().remove()
}

const destroyFailure = (error) => {
  $('.core-alert').text('Sorry, we were unable to remove your selected movie')
}

// current implementation of destroy method.
// Needs to inhabit ui file becuase I don not know how to link to the events file and make onDestroy work.
const destroy = (event) => {
  event.preventDefault()
  let data = getFormFields(event.target)
  data = data.movie
  api.destroy(data.id)
    .then(destroySuccess(event))
    .catch(destroyFailure)
}
// This method is jury rigged. Still not sure how we can simply press a button and delete the target.
// I know the problem is that I cannot return the id number linked to the item. Once I figure out how to do this, I will be able to eliminate this form based implementation

const createSuccess = (response) => {
  $('.core-alert').text('You have added a movie to your list of favorites')
  // Would like to provide more information about what movie was added.
  const showMoviesHtml = addMovieTemplate({ movie: response.movie })
  $('.content').append(showMoviesHtml)
  $('.destroy').on('submit', destroy)
}

const createFailure = (error) => {
  $('.core-alert').text('Sorry, we were unable to create your movie!')
}

// creates a handlebars manifestation of the list of favorite movies
const indexSuccess = (response) => {
  const showMoviesHtml = showMoviesTemplate({ movies: response.movies })
  $('.content').append(showMoviesHtml)
  $('.destroy').on('submit', destroy)
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

const updateSuccess = (response) => {
  // burndown
  console.log(response)
  console.log('successful update')
  // burndown
}

const updateFailure = (error) => {
  // burndown
  console.log('update failed')
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
