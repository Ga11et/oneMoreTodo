require('dotenv').config({ path: process.cwd() + '/.env' })
const mongoose = require('mongoose')
const todoModel = require('../models/todoModel')
const formattedReturn = require('./formattedReturn')

module.exports = async (event) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    const todo = await todoModel.findById(JSON.parse(event.body))
    await todoModel.deleteOne({ todo })

    return formattedReturn(200, 'todo deleted')
  } catch (error) {
    return formattedReturn(400, `deleting error ${error}`)
  }
}