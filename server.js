const app = require('./app')
const { PORT } = require('./config/env')

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`)
})