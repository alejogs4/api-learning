const { Teacher } = require('../../database/')
const { codes, handleError, convertToJson, encrypt, deletePassword } = require('../utils')


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

module.exports = {
  signUp
}