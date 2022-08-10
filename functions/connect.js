
exports.handler = async () => {
  const formattedReturn = require('./helpers/formattedReturn')
  const mongoose = require('mongoose')
  require('dotenv').config({ path: process.cwd() + '/.env' })

  try {
    mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    return formattedReturn(200, 'ok')
  } catch (error) {
    return formattedReturn(400, `connection problem ${error}`)
  }

  mongoose.connect
}