'use strict'

const store = require('../store.js')

// Displays that user has signed up successfully
const signUpSuccess = (response) => {
  $('.loginAlert').text('You have successfully signed up')
}

// Displays users failure to sign up
const signUpFailure = (error) => {
  $('.loginAlert').text('Not a viable username.')
}

// Hides login-info section, sets the board and footer to visible on success
const signInSuccess = (response) => {
  store.user = response.user
  document.querySelector('.login').style.visibility = 'hidden'
  document.querySelector('.core').style.visibility = 'visible'
  document.querySelector('.logout').style.visibility = 'visible'
}

// Displays users failure to sign in
const signInFailure = (error) => {
  $('.loginAlert').text('login attempt failed.')
}

// Displays that user has successfully changed password
const changePasswordSuccess = (response) => {
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
  document.querySelector('.login').style.visibility = 'visible'
  document.querySelector('.core').style.visibility = 'hidden'
  document.querySelector('.logout').style.visibility = 'hidden'
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
