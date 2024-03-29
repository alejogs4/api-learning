const { Student } = require('../../database/index')
const { 
  codes, 
  handleError, 
  convertToJson, 
  encrypt, 
  deletePassword,
  generateToken } = require('../utils')

/**
 * Maneja la informacion del estudiante 
 */
function manageData(res, statusCode = codes.OK_CODE) {
  return student => {
    deletePassword(student)
    res.status(statusCode).send(student)
  }
}

/**
 * Registra a un estudiante en la base de datos
 */
function signUp(req, res) {
  req.body.password = encrypt(req.body.password)
  const newStudent = Student.build(req.body)

  return newStudent.save()
    .then(convertToJson)
    .then(manageData(res, codes.CREATED))
    .catch(handleError(res))
}

/**
 * Ejecuta login del estudiante en la aplicacion
 */
function signIn(req, res) {
  req.body.password = encrypt(req.body.password)
  const { password, email } = req.body

  Student.find({
    attributes: ['dni_student', 'name', 'lastname', 'email', 'degree'],
    where: { email, password  }
  })
  .then(student => {
    if(!student) throw new Error('El email o contraseña son equivocados')
    else return convertToJson(student)
  })
  .then(generateToken)
  .then(manageData(res, codes.OK_CODE))
  .catch(handleError(res))
}

module.exports = {
  signUp,
  signIn
}
