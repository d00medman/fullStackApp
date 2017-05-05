'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.create(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onIndex = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

const onShow = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  // problem is that ajax call needs to be passed a straight up int. Is instead
  // being passed an object, causing the url to be impropery appended thus throwing
  // the 404 error
  api.show(data)
    .then(ui.showSuccess)
    .catch(ui.showFailure)
}

const addHandlers = () => {
  $('.create').on('submit', onCreate)
  $('.index').on('click', onIndex)
  $('.show').on('submit', onShow)
}

module.exports = {
  addHandlers
}
