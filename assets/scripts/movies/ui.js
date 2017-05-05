'use strict'

const createSuccess = (response) => {
  // burndown
  console.log('success')
  console.log(response)
  // burndown
}

const createFailure = (error) => {
  // burndown
  console.log('failed to create')
  // burndown
}

const indexSuccess = (response) => {
  // burndown
  console.log(response)
  const movies = response.movies
  console.log(movies)
  // burndown
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
