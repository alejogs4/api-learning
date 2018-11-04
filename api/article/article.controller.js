const { Article, Teacher, ArticleScore } = require('../../database/index')
const { 
  codes, 
  handleError, 
  convertToJson } = require('../utils')
const { articleWithAutorData } = require('./sequelizeArticleQuery')

/**
 * Maneja la informacion del articulo
 */
function manageData(res, statusCode = codes.OK_CODE) {
  return article => { 
    res.status(statusCode).json(article) 
  }
}

function getArticleByDate(req, res) {
  const fecha = req.params.fecha
  Article.findAll({
    where: { fecha }
  })
  .then(convertToJson)
  .then(manageData(res, codes.OK_CODE))
  .catch(handleError(res))
}

function getArticlesWithAutorData(req, res) {
  return Article.findAll(articleWithAutorData(Teacher))
  .then(articles => {
    if(!articles) throw new Error('No se encontraron articulos')
    else return articles
  })
  .then(manageData(res, codes.OK_CODE))
  .catch(handleError(res))  
}

function getArticlesWithAutorDataById(req, res) {
  const { id } = req.params
  return Article.findOne({...articleWithAutorData(Teacher), where:{ id_article: id }})
    .then(manageData(res, codes.OK_CODE))
    .catch(handleError(res, codes.SERVER_ERROR))
}

function getArticlesByScore(req, res) {
  return Article.findAll({
    include: [{ model: ArticleScore }],
    order: [[ ArticleScore, 'score', 'DESC' ]]
  })
  .then(articles => {
    const articlesFounded = JSON.parse(JSON.stringify(articles))
    const articlesWithScore = articlesFounded.filter(article => article.score_articles.length > 0)

    return res.status(codes.OK_CODE).json(articlesWithScore)
  })
  .catch(handleError(res))
}

function getArticleByTeacher(req, res) {
  const dni_teacher = req.params.dni

  return Article.findAll({
    include: [{ 
      model: Teacher , 
      attributes:['dni_teacher', 'name', 'lastname', 'email'],
      where: { dni_teacher }
    }]
  })
  .then(manageData(res))
  .catch(handleError(res))
}

module.exports = {
  getArticleByDate,
  getArticlesWithAutorData,
  getArticlesWithAutorDataById,
  getArticlesByScore,
  getArticleByTeacher
}
