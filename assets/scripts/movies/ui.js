'use strict'

const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const addMovieTemplate = require('../templates/add-movie.handlebars')

const api = require('./api')
const getFormFields = require(`../../../lib/get-form-fields`)

// current implementation of destroy method.
// Needs to inhabit ui file becuase I don not know how to link to the events file and make onDestroy work.
const destroy = (event) => {
  event.preventDefault()
  let data = getFormFields(event.target)
  data = data.movie
  api.destroy(data.id)
  $(event.target).parent().remove()
}
// This method is jury rigged. Still not sure how we can simply press a button and delete the target.
// I know the problem is that I cannot return the id number linked to the item. Once I figure out how to do this, I will be able to eliminate this form based implementation

const createSuccess = (response) => {
  // burndown
  console.log('create success')
  console.log(response)
  // burndown
  const showMoviesHtml = addMovieTemplate({ movie: response.movie })
  $('.content').append(showMoviesHtml)
  $('.destroy').on('submit', destroy)
}

const createFailure = (error) => {
  // burndown
  console.log('failed to create')
  // burndown
}

// creates a handlebars manifestation of the list of favorite movies
const indexSuccess = (response) => {
  // burndown
  console.log(response)
  // burndown
  const showMoviesHtml = showMoviesTemplate({ movies: response.movies })
  $('.content').append(showMoviesHtml)
  // callback here is probably wrong
  $('.destroy').on('submit', destroy)
}

const indexFailure = (error) => {
  // burndown
  console.log('failed to index')
  // burndown
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

// const destroySuccess = (response) => {
//   // burndown
//   console.log('successful deletion')
//   // burndown
// }

// Both of these methods have been rendered superflous by creation of destroy method in this file. destroySuccess has a good chance of being uncommented because it is useful for its alert functionality

// const destroyFailure = (error) => {
//   // burndown
//   console.log('failure to delete')
//   // burndown
// }

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
  // destroyFailure,
  updateSuccess,
  updateFailure
}
