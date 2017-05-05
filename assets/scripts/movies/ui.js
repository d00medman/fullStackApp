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
// alright, so this works and returns an object full of movies. Need to find some way to crack this object, make it spill each movie individually. Not super relevant ATM, but it needs to be kept in mind that this is nowhere near complete in its implementation.

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

module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  indexFailure,
  showSuccess,
  showFailure,
  destroySuccess,
  destroyFailure
}
