<template>
  <main>
    <div class="todoItem" v-for="todo in todos">
      {{ todo.description }}
    </div>
  </main>
</template>
<script lang='js'>
import Vue from 'vue'
import { TodoAPI } from './api/api';
import store from './store';

export default Vue.extend({
  name: 'name',
  mounted: async function () {
    store.dispatch('fetchTodos')
  },
  computed: {
    todos () {
      return store.state.todos
    }
  }
})
</script>
<style lang='scss'>
@import '@/variables';
</style>
