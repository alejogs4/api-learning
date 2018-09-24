const codes = {
  OK_CODE: 200,
  CREATED: 201,
  SERVER_ERROR: 500
}

/**
 * Maneja errores que pueden pasar en la aplicación
 */
function handleError(res, statusCode = codes.SERVER_ERROR) {
  return err => {
    res.status(statusCode).send({err, message: err.message})
  }
}

/**
 * Convierte un objeto de sequelize en un objeto JSONs 
 */
function convertToJson(relation) {
  return relation.toJSON()
}


module.exports = {
  codes,
  handleError,
  convertToJson
}