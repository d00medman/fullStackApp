'use strict'

const createSuccess = (response) => {
  console.log('success')
  console.log(response)
}

const createFailure = (error) => {
  console.log('failed to create')
}

const indexSuccess = (response) => {
  const movies = response.movies
  // alright, so this works and returns an object full of movies. Need to find some way to crack this object, make it spill each movie individually. Not super relevant ATM, but it needs to be kept in mind that this is nowhere near complete in its implementation.
  console.log(movies)
}

const indexFailure = (error) => {
  console.log('failed to index')
}

module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  indexFailure
}
