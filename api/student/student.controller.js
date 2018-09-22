const Student = require('../../database/models/Students')
const crypto = require('crypto')
const { codes } = require('../utils')

/**
 * Maneja errores en las peticiones a la base de datos 
 */
function handleError(res, statusCode = codes.SERVER_ERROR) {
  return err => {
    res.status(statusCode).send(err)
  }
}

/**
 * Maneja la informacion del estudiante 
 */
function manageData(res, statusCode = codes.OK_CODE) {
  return student => {
    res.status(statusCode).send(student)
  }
}

/**
 * Registra a un estudiante en la base de datos
 */
function signUp(req, res) {
  req.body.password = crypto.createHmac('sha256', req.body.password).digest('hex')
  const newStudent = Student.build(req.body)

  return newStudent.save()
    .then(manageData(res, codes.CREATED))
    .catch(handleError(res))
}

module.exports = {
  signUp
}