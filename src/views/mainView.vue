<template>
  <div class="mainView">
    <transition name="popup">
      <AddingPopup v-if="popupShown" />
    </transition>
    <Header />
    <TodoSearch />
    <TodoHead />
    <div class="todosContainer">
      <TodoItem v-for="todo in todos" :content="todo" :key="todo.id" />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import TodoItem from '@/components/todoItem.vue';
import store from '@/store';
import Header from '@/components/header.vue';
import AddingPopup from '@/components/addingPopup.vue';
import TodoHead from '@/components/todoHead.vue';
import TodoSearch from '@/components/todoSearch.vue';

export default Vue.extend({
    name: "main-view",
    computed: {
        todos() {
            return store.getters.filteredTodos
        }
    },
    components: { TodoItem, Header, AddingPopup, TodoHead, TodoSearch },
    data: function () {
      return {
        popupShown: false
      }
    },
    mounted: function () {
      this.$root.$on('closePopup', () => {
        this.popupShown = false
      })
      this.$root.$on('openPopup', () => {
        this.popupShown = true
      })
    }
})
</script>
<style lang="scss">
@import '@/variables.scss';

.popup-enter-active,
.popup-leave-active {
  transition: all 600ms;
}
.popup-enter,
.popup-leave-to {
  opacity: 0;
}

.mainView{
  position: fixed;
  top: 100px;
  right: 150px;
  bottom: 100px;
  left: 150px;

  .todosContainer{
    height: 70%;
    overflow: auto;
  }
}
</style>