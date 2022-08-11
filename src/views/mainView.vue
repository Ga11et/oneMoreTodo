import store from '@/store';
import store from '@/store';
import store from '@/store';
import store from '@/store';
<template>
  <div class="mainView">
    <TodoItem v-for="todo in todos" :content="todo" :key="todo.id" />
  </div>
</template>
<script>
import Vue from 'vue'
import TodoItem from '@/components/todoItem.vue';
import store from '@/store';

export default Vue.extend({
    name: "main-view",
    computed: {
        todos() {
            return store.state.todos;
        }
    },
    components: { TodoItem }
})
</script>
<style lang="scss">
@import '@/variables.scss';
.mainView{
  position: fixed;
  top: 100px;
  right: 150px;
  bottom: 100px;
  left: 150px;
}
</style>