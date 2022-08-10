const dev = 'http://localhost:8888/.netlify/functions'
const prod = 'https://onemoretodo.netlify.app/.netlify/functions'

export const TodoAPI = {
  connect: async () => {
    const response = await fetch(prod + '/connect').then(resp => resp.json())
    console.log(response)
  },
  fetchTodos: async () => {
    const response = await fetch(prod + '/todos').then(resp => resp.json())
    console.log(response)
    return response
  }
}