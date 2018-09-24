const Sequelize = require('sequelize')
const sequelize = require('../connection')()

/**
 * Definimos el modelo que representara al profesor
 */
const Teacher = sequelize.define('teachers', {
  dni_teachers: { 
    type: Sequelize.STRING(20), 
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
})

module.exports = Teacher