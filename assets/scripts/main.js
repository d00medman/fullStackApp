'use strict'

const test = function (event) {
  console.log('works')
}

const addHandlers = () => {
  $('.fave').on('click', test)
}

module.exports = {
  addHandlers
}
