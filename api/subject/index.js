const { Router } = require('express')
const router = new Router()
const Controller = require('./subject.controller')

router.get('/api/v1/teachers/subject/:subject', Controller.teachersBySubject)

module.exports = router