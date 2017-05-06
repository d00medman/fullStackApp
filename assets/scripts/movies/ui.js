'use strict'

const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const addMovieTemplate = require('../templates/add-movie.handlebars')

const api = require('./api')

// // Moved over from events.js, would like to see a smoother method to delete
// // probably could just make the api call via the button. Have a way to retrieve
// // a target for the api call.
// const getFormFields = require(`../../../lib/get-form-fields`)
// const api = require('./api')
// const onDestroy = function (event) {
//   event.preventDefault()
//   let data = getFormFields(event.target)
//   data = data.movie
//   api.destroy(data.id)
//     .then(ui.destroySuccess)
//     .catch(ui.destroyFailure)
// }

const test = (event) => {
  const data = $(event.target).attr('data-id')
  // the problem is that data-id != the id of the item its listed with
  // need to find some way to extract its id
  console.log(event.target)
  // Alright, may start to be seeing the problem. event.target hits the button, needs to get the entire object.
  // api.destroy(data)
  $(event.target).parent().remove()
}

const createSuccess = (response) => {
  // burndown
  console.log('create success')
  console.log(response)
  // burndown
  const showMoviesHtml = addMovieTemplate({ movie: response.movie })
  $('.content').append(showMoviesHtml)
  $('.destroy').on('click', test)
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
  $('.destroy').on('click', test)
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

const destroySuccess = (response) => {
  // burndown
  console.log('successful deletion')
  // burndown
}

const destroyFailure = (error) => {
  // burndown
  console.log('failure to delete')
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
  destroySuccess,
  destroyFailure,
  updateSuccess,
  updateFailure
}
