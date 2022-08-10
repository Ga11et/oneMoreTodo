const {Schema, model} = require('mongoose')

const todoSchema = new Schema({
  description: { type: String, required: true },
  isDone: { type: Boolean, default: false },
  date: { type: Date }
})

module.exports = model('Todo', todoSchema)