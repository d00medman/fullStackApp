'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// Fires on creation of a new Movie
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

// Manifests the database, called by the user on sign in
const onIndex = function () {
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

// Calls to the OMDB and displays the information returned
const onOMDB = function (event) {
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

// adds event handler which toggles which part of the app is user-facing
const onToggle = function (event) {
  event.preventDefault()
  ui.toggle()
}

// const onShow = function (event) {
//   event.preventDefault()
//   let data = getFormFields(event.target)
//   data = data.movie
//   api.show(data.id)
//     .then(ui.showSuccess)
//     .catch(ui.showFailure)
// }

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
