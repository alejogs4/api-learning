const { Teacher } = require('../../database/')
const { codes, handleError, convertToJson } = require('../utils')
const crypto = require('crypto')


function manageData(res, statusCode = codes.OK_CODE) {
  return teacher => {
    res.status(statusCode).send(teacher)
  }
}

/**
 * Registra a un profesor en la aplicacion 
 */
function signUp(req, res) {
  req.body.password = crypto.createHmac('sha256', req.body.password).digest('hex')
  const teacher = Teacher.build(req.body)

  return teacher.save()
    .then(manageData(res, codes.CREATED))
    .catch(handleError(res))
}

module.exports = {
  signUp
}