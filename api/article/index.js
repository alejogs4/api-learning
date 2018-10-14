const { Router } = require('express')
const router = new Router()
const Controller = require('./article.controller')

router.get('/api/v1/article/fecha/:fecha', Controller.getArticleByDate)

module.exports = router
