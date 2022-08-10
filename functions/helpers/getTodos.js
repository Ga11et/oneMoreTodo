module.exports = async (event) => {
  const formattedReturn = require('./formattedReturn')
  const todoModel = require('../models/todoModel')

  try {
    const todos = await todoModel.find()

    return formattedReturn(200, todos)
  } catch (error) {
    return formattedReturn(200, `worrry!!!! ${error}`)
  }
}