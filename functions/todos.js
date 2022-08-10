exports.handler = async (event) => {
  const formattedReturn = require('./helpers/formattedReturn')
  const getTodos = require('./helpers/getTodos')
  const addTodo = require('./helpers/addTodo')
  const removeTodo = require('./helpers/removeTodo')
  const changeTodo = require('./helpers/changeTodo')
  if (event.httpMethod === 'GET') {
    return await getTodos(event)
  }
  if (event.httpMethod === 'POST') {
    return await addTodo(event)
  }
  if (event.httpMethod === 'PUT') {
    return await changeTodo(event)
  }
  if (event.httpMethod === 'DELETE') {
    return await removeTodo(event)
  }
  if (event.httpMethod === 'OPTIONS') {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };
    return {
      statusCode: 200,
      headers,
      body: 'This was a preflight call!'
    };
  }
  return formattedReturn(405, { error: 'worrry!!!!' });
};