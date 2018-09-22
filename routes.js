/**
 * Importamos endpoints para las rutas
 */
const Student = require('./api/student')

module.exports = app => {
  app.use(Student)
  
  app.get('/', (req, res) => {
    res.status(200).send('API de la app edukt')
  })
}