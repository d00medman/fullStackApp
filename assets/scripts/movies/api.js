'use strict'

const config = require('../config.js')
const store = require('../store.js')

const create = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/movies/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const update = (data, targ) => {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + targ, // now its a 400 error
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/movies/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// a function designed to parse data returned from form fields in a manner which can be fed to the third party API, assuming said third party API requires the pluses between the words.
const parseData = function (data) {
  if (data.includes(' ')) {
    let parsed = data.split(' ')
    parsed = parsed.join('+')
    return parsed
  }
  return data
}

// sends the title to OMDB and returns information
const omdbGet = function (data) {
  return $.ajax({
    url: 'http://www.omdbapi.com/' + '?t=' + parseData(data), // in between the url and the data, there is a string of charachters '?t='. Do i need to include this in my url call or is it added implicitly? This is also true for the plus signs between words when I input a multi-word title
    // ^ building under the above assumption
    method: 'GET'
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/movies/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  update,
  index,
  show,
  destroy,
  omdbGet
}
