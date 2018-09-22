const express = require('express')
const app = express()
const setupExpress = require('./config/express')
const setupRoutes = require('./routes')

setupExpress(app)
setupRoutes(app)

module.exports = app