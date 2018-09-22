const { verify, sign } = require('jsonwebtoken')
const SECRET_KEY = require('./config/env').SECRET_KEY

const createToken = payload => {
  return sign(payload, SECRET_KEY, { expiresIn: '2days' })
}