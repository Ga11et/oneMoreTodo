exports.handler = async () => {
  const formattedReturn = require('./helpers/formattedReturn')
  const mongoose = require('mongoose')
  const todoModel = require('../models/todoModel')
  require('dotenv').config({ path: process.cwd() + '/.env' })

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const todos = await todoModel.find()

    return formattedReturn(200, todos)
  } catch (error) {
    return formattedReturn(400, `connection problem ${error}`)
  }
}