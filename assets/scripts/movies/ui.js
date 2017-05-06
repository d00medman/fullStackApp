'use strict'

const showMoviesTemplate = require('../templates/movie-listing.handlebars')
const addMovieTemplate = require('../templates/add-movie.handlebars')

const createSuccess = (response) => {
  // burndown
  console.log('create success')
  console.log(response)
  // burndown
  const showMoviesHtml = addMovieTemplate({ movie: response.movie })
  $('.content').append(showMoviesHtml)
}

const createFailure = (error) => {
  // burndown
  console.log('failed to create')
  // burndown
}

// creates a handlebars manifestation of the list of favorite movies
const indexSuccess = (response) => {
  const showMoviesHtml = showMoviesTemplate({ movies: response.movies })
  $('.content').append(showMoviesHtml)
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
