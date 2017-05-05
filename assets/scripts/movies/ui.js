'use strict'

const createSuccess = (response) => {
  console.log('success')
  console.log(response)
}

const createFailure = (error) => {
  console.log('failed to create')
}


module.exports = {
  createSuccess,
  createFailure
}
