'use strict'

const store = require('../store.js')

// Displays that user has signed up successfully
const signUpSuccess = (response) => {
  console.log('sign up sucess')
}

// Displays users failure to sign up
const signUpFailure = (error) => {
  console.log('sign up failure')
}

// Hides login-info section, sets the board and footer to visible on success
const signInSuccess = (response) => {
  store.user = response.user
  console.log('sign in success')
}

// Displays users failure to sign in
const signInFailure = (error) => {
  console.log('sign in failure')
}

// Displays that user has successfully changed password
const changePasswordSuccess = (response) => {
  console.log('Password changed successfully.')
}

// Displays that user has failed to change password
const changePasswordFailure = (error) => {
  console.log('Password changed successfully.')
}

// displays that user has logged out. Sets board and footer to hidden, makes login-info visible
const signOutSuccess = (response) => {
  store.user = null
  console.log('sign out success')
}

// Makes fun of you if you fail to sign out
const signOutFailure = (error) => {
  console.log('sign out failure')
}

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
