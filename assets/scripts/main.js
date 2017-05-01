'use strict'

const test = function (event) {
  event.preventDefault()
  console.log('works')
}

const addHandlers = () => {
  $('.fave').on('click', test)
}

module.exports = {
  addHandlers
}
