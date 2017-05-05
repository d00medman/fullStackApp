'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.create(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const test = function (event) {
  event.preventDefault()
  console.log(getFormFields(this))
}

const addHandlers = () => {
  $('.fave-submit').on('submit', onCreate)
  $('.test-submit').on('submit', test)
}

module.exports = {
  addHandlers
}
