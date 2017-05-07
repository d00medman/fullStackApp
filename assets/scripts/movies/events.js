'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

// how fucking bizzarre: the exact same code in ui has the opposite output. Only way I can get the output I want is to flip the returns
const validate = (input) => {
  if (input === '') { return false }
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
    $('.core-alert').text('Please give us a movie.')
  }
}

// bein used to test whether or not I can snap build the users movies
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
  // $('.destroy').on('submit', onDestroy) // superflous so long as destroy buttons are being created via handlebars scripts
  // $('.update').on('submit', onUpdate)
}

module.exports = {
  addHandlers,

  onIndex
}
