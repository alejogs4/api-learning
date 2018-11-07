const { Router } = require('express')
const router = new Router()
const Controller = require('./subject.controller')

router.post('/api/v1/teacher/subject', Controller.addSubjectToTeacher)
router.get('/api/v1/teachers/subjects', Controller.getSubjects)
router.get('/api/v1/teachers/subject/:subject', Controller.teachersBySubject)

module.exports = router