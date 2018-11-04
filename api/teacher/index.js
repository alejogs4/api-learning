const { Router } = require('express')
const router = new Router()
const Controller = require('./teacher.controller')

router.post('/api/v1/teacher', Controller.signUp)
router.post('/api/v1/teacher/login', Controller.signIn)
router.get('/api/v1/teachers/score', Controller.getTeachersByScore)

module.exports = router