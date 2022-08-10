module.exports = async (event) => {

  const formattedReturn = require('./formattedReturn')
  const todoModel = require('../models/todoModel')

  try {
    await todoModel.create({ date: new Date().getTime(), description: JSON.parse(event.body) })

    return formattedReturn(200, 'todo created')
  } catch (error) {
    return formattedReturn(400, `creating error ${error}`)
  }
}