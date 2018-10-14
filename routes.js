/**
 * Importamos endpoints para las rutas
 */
const Student = require('./api/student')
const Teacher = require('./api/teacher')
const Article = require('./api/article');

// Modulo para levantar pagina de documentacion
const { swaggerUi, swaggerDocument } = require('./swagger')

module.exports = app => {
  app.use(Student)
  app.use(Teacher)
  app.use(Article)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

  app.get('/', (req, res) => {
    res.status(200).send('API de la app edukt')
  })
}
