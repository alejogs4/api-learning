const { Router } = require('express')
const router = new Router()
const Controller = require('./student.controller')

router.post('/api/v1/student', Controller.signUp)
router.post('/api/v1/student/login', Controller.signIn)

module.exports = router