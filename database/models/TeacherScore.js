const sequelize = require('../connection')()
const Sequelize = require('sequelize')

const TeacherScore = sequelize.define('score_teacher', {
  dni_teacher: {
    type: Sequelize.TEXT(20),
    primaryKey: true,
    allowNull: false
  },
  dni_student: {
    type: Sequelize.TEXT(20),
    primaryKey: true,
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'score_teacher',
  createdAt: false,
  updatedAt: false
})

module.exports = TeacherScore