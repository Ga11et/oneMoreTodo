const mongoose = require('mongoose')
require('dotenv').config({ path: process.cwd() + '/.env' })
const formattedReturn = require('./formattedReturn')
const todoModel = require('../models/todoModel')

module.exports = async (event) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    const todos = await todoModel.find()

    return formattedReturn(200, todos)
  } catch (error) {
    return formattedReturn(200, `worrry!!!! ${error}`)
  }
}