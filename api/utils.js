const crypto = require('crypto')
const { createToken } = require('../auth/token')
 
const codes = {
  OK_CODE: 200,
  CREATED: 201,
  SERVER_ERROR: 500,
  NOT_FOUND: 404
}

/**
 * Maneja errores que pueden pasar en la aplicación
 */
function handleError(res, statusCode = codes.SERVER_ERROR) {
  return err => {
    res.status(statusCode).send({err, message: err.message})
  }
}

/**
 * Convierte un objeto de sequelize en un objeto JSONs 
 */
const convertToJson = relation => relation.toJSON()

/**
 * Encrypta la cadena de texto que se le pasa como parametro
 */
const encrypt = text => {
 console.log(text)
 return  crypto.createHmac('sha256', text).digest('hex')
}

const deletePassword = obj => {
  if(obj.hasOwnProperty('password')) {
    delete obj.password
  }
}

const generateToken = data => {
  const token = `${createToken(data)}`
  return data
}

module.exports = {
  codes,
  handleError,
  convertToJson,
  encrypt,
  deletePassword,
  generateToken
}
