const todoModel = require('../models/todoModel')
const formattedReturn = require('./formattedReturn')

module.exports = async (event) => {
  try {
    const todo = await todoModel.findById(JSON.parse(event.body))
    await todoModel.deleteOne({ todo })

    return formattedReturn(200, 'todo deleted')
  } catch (error) {
    return formattedReturn(400, `deleting error ${error}`)
  }
}