const { Router } = require('express')
const router = new Router()
const Controller = require('./teacher.controller')

router.post('/api/v1/teacher', Controller.signUp)

module.exports = router