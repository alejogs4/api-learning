module.exports = {
  database: 'edukt',
  username: 'postgres',
  password: '',
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
}