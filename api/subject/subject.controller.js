const {
  Subjects,
  Teacher,
  SubjectTeacher
} = require('../../database/')

const {handleError, codes} = require('../utils')

function manageData(res, statusCode = codes.OK_CODE) {
  return teachers => {
    res.status(statusCode).json(teachers)
  }
}

function teachersBySubject(req, res) {
  const name = req.params.subject

  return SubjectTeacher.findAll({
    include:[
      {model: Teacher, attributes: ['dni_teacher', 'name', 'lastname', 'email']}, 
      {model: Subjects, where: {name}}
    ],
  })
  .then(manageData(res))
  .catch(handleError(res))
}

module.exports = {
  teachersBySubject
}