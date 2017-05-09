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

// sends a GET request to OMDB
const omdbGet = function (data) {
  return $.ajax({
    url: 'https://www.omdbapi.com/' + '?t=' + parseData(data),
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
