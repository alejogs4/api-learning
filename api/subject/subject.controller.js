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
  .then(teacher => {
    const teachers = JSON.parse(JSON.stringify(teacher)).map(teacher => teacher.teacher)
    return teachers
  })
  .then(manageData(res))
  .catch(handleError(res))
}

function getSubjects(req, res) {
  return Subjects.findAll()
    .then(manageData(res))
    .catch(handleError(res))
}

module.exports = {
  teachersBySubject,
  getSubjects
}