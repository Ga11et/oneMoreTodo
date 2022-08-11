// const prod = 'http://localhost:8888/.netlify/functions'
const prod = 'https://onemoretodo.netlify.app/.netlify/functions'

export const TodoAPI = {
  fetchTodos: async () => {
    const response = await fetch(prod + '/todos').then(resp => resp.json())
    return response
  },
  addTodo: async (newTodoText) => {
    const response = await fetch(prod + '/todos', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newTodoText) }).then(resp => resp.json())
    return response
  },
  finishTodo: async (todoId) => {
    const response = await fetch(prod + '/todos', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(todoId) }).then(resp => resp.json())
    return response
  }
}