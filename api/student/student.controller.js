const Student = require('../../database/models/Students')
const crypto = require('crypto')
const { codes } = require('../utils')

/**
 * Maneja errores en las peticiones a la base de datos 
 */
function handleError(res, statusCode = codes.SERVER_ERROR) {
  return err => {
    res.status(statusCode).send({err, message: err.message})
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

function convertToJson(relation) {
  return relation.toJSON()
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

/**
 * Ejecuta login del estudiante en la base de datos 
 */
function signIn(req, res) {
  req.body.password = crypto.createHmac('sha256', req.body.password).digest('hex')

  const { password, email } = req.body
  Student.find({
    attributes: ['dni_students', 'name', 'lastname', 'email', 'degree'],
    where: { email, password  }
  })
  .then(student => {
    if(!student) throw new Error('El email o contraseña son equivocados')
    else return convertToJson(student)
  })
  .then(manageData(res, codes.OK_CODE))
  .catch(handleError(res))
}

module.exports = {
  signUp,
  signIn
}