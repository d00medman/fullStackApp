'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const test = function (event) {
  event.preventDefault()
  let data = getFormFields(this)
  data = data.key
  console.log(data)
}

const addHandlers = () => {
  $('.fave').on('click', test)
}

module.exports = {
  addHandlers
}
