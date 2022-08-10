const todoModel = require('../models/todoModel')
const formattedReturn = require('./formattedReturn')

module.exports = async (event) => {
  try {
    const todo = await todoModel.findById(JSON.parse(event.body))
    await todoModel.replaceOne(todo, { isDone: true, description: todo.description, date: todo.date })

    return formattedReturn(200, 'todo changed')
  } catch (error) {
    return formattedReturn(400, `changing error ${error}`)
  }
}