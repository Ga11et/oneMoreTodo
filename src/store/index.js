import { TodoAPI } from '@/api/api'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    filterValue: '',
    sortValue: 'Дата'
  },
  getters: {
    filteredTodos (state) {
      return state.todos.filter(el => {
        const checkName = el.description.toLowerCase().indexOf(state.filterValue.toLowerCase()) !== -1
        const checkId = el._id.toLowerCase().indexOf(state.filterValue) !== -1
        const checkDate = (new Date(el.date)).toLocaleDateString().indexOf(state.filterValue) !== -1
        const checkIsDone = el.isDone && 'выполнено'.indexOf(state.filterValue.toLowerCase()) !== -1
        const checkIsDone2 = !el.isDone && 'в работе'.indexOf(state.filterValue.toLowerCase()) !== -1
        return checkName | checkId | checkDate | checkIsDone | checkIsDone2
      } ).sort((before, after) => {
        if (state.sortValue === 'Дата') return after.date - before.date
        if (state.sortValue === 'Статус') return before.isDone - after.isDone
      })
    }
  },
  mutations: {
    setTodos: (state, payload) => {
      state.todos = payload
    },
    setFilterValue: (state, payload) => {
      state.filterValue = payload
    },
    setSortValue: (state, payload) => {
      state.sortValue = payload
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
