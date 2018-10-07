// Modulos para leer la documentacion en formato YAML y renderizarla con swagger
const path = require('path')
const docsPath = path.resolve('./docs/docs.yaml')

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(docsPath);

module.exports = { swaggerUi, swaggerDocument }
