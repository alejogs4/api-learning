const { Article } = require('../../database/index')
const { codes, handleError, convertToJson } = require('../utils')

/**
 * Maneja la informacion del articulo
 */
function manageData(res, statusCode = codes.OK_CODE) {
  return article => {
    res.status(statusCode).send(article)
  }
}


getArticleByDate = function(req, res) {
  const fecha = req.params.fecha
  Article.findAll({
    where: { fecha }
  })
  .then(convertToJson)
  .then(manageData(res, codes.OK_CODE))
  .catch(handleError(res))
}

module.exports = {
  getArticleByDate
}
