const Sequelize = require('sequelize')
const sequelize = require('../connection')()

/**
 * Definimos modelo que representara a nuestro estudiante en el ORM
 */
const Student = sequelize.define('student', {
  dni_students: { 
    type: Sequelize.STRING(20),
    primaryKey: true, 
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: false
  },
  degree: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
})

Student.sync({ force: true })

module.exports = Student