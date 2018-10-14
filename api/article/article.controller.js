const { Article, Teacher } = require('../../database/index')
const { createToken } = require('../../auth/token')
const { codes, handleError, convertToJson, encrypt, deletePassword } = require('../utils')

/**
 * Maneja la informacion del articulo
 */
function manageData(res, statusCode = codes.OK_CODE) {
  return articulo => {
    res.status(statusCode).send(articulo)
  }
}


getArticleByDate = function(req, res) {
  const fecha = req.params.fecha
  Article.findAll({
    where: { fecha },
    // include: [{model: Teacher}]
  })
  .then(manageData(res, codes.OK_CODE))
  .catch(handleError(res))
}

module.exports = {
  getArticleByDate
}
