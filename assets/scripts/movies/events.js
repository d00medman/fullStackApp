'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const validate = (input) => {
  if (/[a-z]/.test(input.toLowerCase()) === false) { return false }
  return true
}

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  if (validate(data.movie.title) === true) {
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

const onShow = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  data = data.movie
  api.show(data.id)
    .then(ui.showSuccess)
    .catch(ui.showFailure)
}

const onOMDB = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data.movie.title)
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
  $('.show').on('submit', onShow)
  $('.omdb').on('submit', onOMDB)
  // $('.destroy').on('submit', onDestroy) // superflous so long as destroy buttons are being created via handlebars scripts
  // $('.update').on('submit', onUpdate)
}

module.exports = {
  addHandlers,

  onIndex
}
