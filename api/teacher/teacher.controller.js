const { Teacher } = require('../../database/')
const { 
  codes, 
  handleError, 
  convertToJson, 
  encrypt, 
  deletePassword, 
  generateToken } = require('../utils')
 

function manageData(res, statusCode = codes.OK_CODE) {
  return teacher => {
    deletePassword(teacher)
    res.status(statusCode).send(teacher)
  }
}

/**
 * Registra a un profesor en la aplicacion 
 */
function signUp(req, res) {
  req.body.password = encrypt(req.body.password)
  const teacher = Teacher.build(req.body)

  return teacher.save()
    .then(convertToJson)
    .then(manageData(res, codes.CREATED))
    .catch(handleError(res))
}

function signIn(req, res) {
  req.body.password = encrypt(req.body.password)
  const { password, email } = req.body

  return Teacher.find({
    attributes: ['dni_teacher', 'name', 'lastname', 'email'],
    where: { password, email }
  })
  .then(teacher => {
    if(!teacher) throw new Error('El email o contraseña son incorrectas')
    else return convertToJson(teacher)
  })
  .then(generateToken)
  .then(manageData(res, codes.OK_CODE))
  .catch(handleError(res))
}

module.exports = {
  signUp,
  signIn
}