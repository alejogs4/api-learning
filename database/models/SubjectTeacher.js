const Sequelize = require('sequelize')
const sequelize = require('../connection')()

const SubjectTeacher = sequelize.define('teacher_subject', {
  dni_teacher: {
    type: Sequelize.TEXT(20),
    primaryKey: true,
    allowNull: false
  },
  id_subject: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  }
}, {
  tableName: 'teacher_subject',
  createdAt: false,
  updatedAt: false
})

module.exports = SubjectTeacher