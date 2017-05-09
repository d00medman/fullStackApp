'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  if (ui.validate(data.movie.title) === true) {
    api.create(data)
      .then(ui.createSuccess)
      .catch(ui.createFailure)
  } else {
    ui.createFailure()
  }
}

const onIndex = function () {
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

// const onShow = function (event) {
//   event.preventDefault()
//   let data = getFormFields(event.target)
//   data = data.movie
//   api.show(data.id)
//     .then(ui.showSuccess)
//     .catch(ui.showFailure)
// }

const onOMDB = function (event) {
  // needs to throw a message when given an invalid return
  event.preventDefault()
  const data = getFormFields(this)
  if (ui.validate(data.movie.title) === true) {
    api.omdbGet(data.movie.title)
      .then(ui.omdbGetSuccess)
      .catch(ui.omdbGetFailure)
  } else {
    ui.omdbGetFailure()
  }
}

const onToggle = function (event) {
  event.preventDefault()
  ui.toggle()
}

// called with a button press. Because surface level destroy button has been removed and destroy buttons are being built with handlebars in the ui, this event is superflous, but not to be deleted yet.

// const onDestroy = function (event) {
//   event.preventDefault()
//   let data = getFormFields(event.target)
//   data = data.movie
//   api.destroy(data.id)
//     .then(ui.destroySuccess)
//     .catch(ui.destroyFailure)
// }

// const onUpdate = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const targ = data.movie
//   api.update(data, targ)
//     .then(ui.updateSuccess)
//     .catch(ui.updateFailure)
// }

const addHandlers = () => {
  $('.create').on('submit', onCreate)
  $('.omdb').on('submit', onOMDB)
  $('.toggle').on('click', onToggle)
  // $('.show').on('submit', onShow)
  // $('.destroy').on('submit', onDestroy) // superflous so long as destroy buttons are being created via handlebars scripts
  // $('.update').on('submit', onUpdate)
}

module.exports = {
  addHandlers,

  onIndex
}
