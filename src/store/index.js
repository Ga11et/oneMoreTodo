import { TodoAPI } from '@/api/api'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    setTodos: (state, payload) => {
      state.todos = payload
    }
  },
  actions: {
    fetchTodos: async ({ commit }) => {
      const todos = await TodoAPI.fetchTodos()
      commit('setTodos', todos)
    }
  },
  modules: {
  }
})
