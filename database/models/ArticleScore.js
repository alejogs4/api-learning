const sequelize = require('../connection')()
const Sequelize = require('sequelize')

const ArticleScore = sequelize.define('score_article', {
  id_article: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  dni_student: {
    type: Sequelize.STRING(20),
    primaryKey: true,
    allowNull: false
  },
  score: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'score_article',
  createdAt: false,
  updatedAt: false
})

module.exports = ArticleScore