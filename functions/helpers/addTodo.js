const mongoose = require('mongoose')
const formattedReturn = require('./formattedReturn')
const todoModel = require('../models/todoModel')
require('dotenv').config({ path: process.cwd() + '/.env' })

module.exports = async (event) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    await todoModel.create({ date: new Date().getTime(), description: JSON.parse(event.body) })

    return formattedReturn(200, 'todo created')
  } catch (error) {
    return formattedReturn(400, `creating error ${error}`)
  }
}