const { Router } = require('express')
const router = new Router()
const Controller = require('./article.controller')

router.get('/api/v1/article/fecha/:fecha', Controller.getArticleByDate)
router.get('/api/v1/articles', Controller.getArticlesWithAutorData)
router.get('/api/v1/articles/:id', Controller.getArticlesWithAutorDataById)
router.get('/api/v1/articles/student/score', Controller.getArticlesByScore)
router.get('/api/v1/articles/teacher/:dni', Controller.getArticleByTeacher)
router.post('/api/v1/article', Controller.createArticle)

module.exports = router
