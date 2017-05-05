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

module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  indexFailure,
  showSuccess,
  showFailure
}
