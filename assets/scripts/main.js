'use strict'

const test = function (event) {
  event.preventDefault()
  // need to find some way to read from the form and console log the input
  console.log('works')
}

const addHandlers = () => {
  $('.fave').on('click', test)
}

module.exports = {
  addHandlers
}
