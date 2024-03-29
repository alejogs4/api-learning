const Sequelize = require('sequelize')
const sequelize = require('../connection')()

const Article = sequelize.define('article', {
  id_article: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  dni_teacher: {
    type: Sequelize.STRING(20),
    allowNull: false
  },

  id_subject: {
    type: Sequelize.INTEGER,
    allowNull: true
  },

  fecha: {
    type: Sequelize.DATE,
    allowNull: false
  },

  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },

  title: {
    type: Sequelize.STRING(100),
    allowNull: false
  },

  image: {
    type: Sequelize.STRING(500),
    allowNull: false
  },

  description: {
    type: Sequelize.STRING(200),
    allowNull: false
  }
},
{
  tableName: 'article',
  createdAt: false,
  updatedAt: false
})

module.exports = Article
