/**
 * Autor Alejandro García Serna
 * Importamos sequelize y inicializamos variable a usar para la conexion
 * Importamos la configuracion de la base de datos
 */
const Sequelize = require('sequelize')
const config = require('../config/database')
let sequelize = null

/**
 * Funcion para conectar la aplicacion con la base de datos
 */
module.exports = function connect() {
  if(!sequelize) {
    const { database, username, password, host, dialect, pool, operatorsAliases } = config
    sequelize = new Sequelize(database, username, password, {
      host,
      dialect,
      pool,
      operatorsAliases
    })
  }
  return sequelize
}
