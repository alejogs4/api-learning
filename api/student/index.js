const { Router } = require('express')
const router = new Router()
const Controller = require('./student.controller')

router.post('/api/v1/student', Controller.signUp)

module.exports = router