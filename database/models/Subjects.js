const Sequelize = require('sequelize')
const sequelize = require('../connection')()

const Subjects = sequelize.define('subject', {
  id_subject: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.TEXT(100),
    allowNull: false
  },
  level: {
    type: Sequelize.TEXT(40),
    allowNull: false
  }
},{
  tableName: 'subject',
  createdAt: false,
  updatedAt: false
})

module.exports = Subjects