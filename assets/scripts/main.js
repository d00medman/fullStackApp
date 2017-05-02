'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const test = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // this sort of works. Now, data returns as an object, but I still need to extract
  // a string
  console.log(data)
}

const addHandlers = () => {
  $('.fave').on('click', test)
}

module.exports = {
  addHandlers
}
