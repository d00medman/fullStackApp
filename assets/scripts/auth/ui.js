'use strict'

const store = require('../store.js')
const movieEvents = require('../movies/events.js')


// Displays that user has signed up successfully
const signUpSuccess = (response) => {
  $('.loginAlert').text('You have successfully signed up')
  document.getElementById('sign-up').reset()
}

// Displays users failure to sign up
const signUpFailure = (error) => {
  $('.loginAlert').text('Not a viable username.')
}

// Hides login-info section, sets the board and footer to visible on success
const signInSuccess = (response) => {
  store.user = response.user
  const login = document.querySelector('.login')
  $(login).hide()
  document.querySelector('.core').style.visibility = 'visible'
  document.querySelector('.logout').style.visibility = 'visible'
  movieEvents.onIndex()
  document.getElementById('sign-in').reset()
}

// Displays users failure to sign in
const signInFailure = (error) => {
  $('.loginAlert').text('login attempt failed.')
}

// Displays that user has successfully changed password
const changePasswordSuccess = (response) => {
  document.getElementById('change-password').reset()
  $('.pass-change-alert').text('Password successfully changed')
}

// Displays that user has failed to change password
const changePasswordFailure = (error) => {
  $('.pass-change-alert').text('Original password incorrect, please input the correct one to proceed')
}

// displays that user has logged out. Sets board and footer to hidden, makes login-info visible
const signOutSuccess = (response) => {
  store.user = null
  $('.loginAlert').text('You have logged out')
  const login = document.querySelector('.login')
  $(login).show()
  document.querySelector('.login').style.visibility = 'visible'
  document.querySelector('.core').style.visibility = 'hidden'
  document.querySelector('.logout').style.visibility = 'hidden'
  $('.content').text('')
  $('.core-alert').text('')
}

// Makes fun of you if you fail to sign out
const signOutFailure = (error) => {}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
