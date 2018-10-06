// Modulos para leer la documentacion en formato YAML y renderizarla con swagger
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/docs.yaml');

module.exports = { swaggerUi, swaggerDocument }