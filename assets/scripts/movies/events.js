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
  let data = getFormFields(event.target)
  data = data.movie
  api.show(data.id)
    .then(ui.showSuccess)
    .catch(ui.showFailure)
}

const onDestroy = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  data = data.movie
  api.destroy(data.id)
    .then(ui.destroySuccess)
    .catch(ui.destroyFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const targ = data.movie
  api.update(data, targ)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const addHandlers = () => {
  $('.create').on('submit', onCreate)
  $('.index').on('click', onIndex)
  $('.show').on('submit', onShow)
  $('.destroy').on('submit', onDestroy)
  $('.update').on('submit', onUpdate)
}

module.exports = {
  addHandlers
}
