<template>
  <div class="todoItem">
    <div class="item">
      <span :class="['span', { checked: content.isDone }]" @click="updateHandler">
        <SvgIcons type="ok" v-if="content.isDone" />
      </span>
    </div>
    <div class="item">
      {{ content.description }}
    </div>
    <div :class="['item', { blue: content.isDone, orange: !content.isDone }]">
      {{ content.isDone ? "Выполнено" : "В работе" }}
    </div>
    <div class="item">
      {{ new Date(content.date).toLocaleDateString() }}
    </div>
  </div>
</template>
<script>
import { TodoAPI } from '@/api/api';
import store from '@/store';
import Vue from 'vue'
import SvgIcons from './svgIcons.vue';

export default Vue.extend({
  name: "todo-item",
  props: ["content"],
  methods: {
    updateHandler: async function () {
      if (!this.content.isDone) {
        await TodoAPI.finishTodo(this.content._id)
        store.dispatch('fetchTodos')
      }
    }
  },
  components: { SvgIcons }
})
</script>
<style lang="scss">
@import '@/variables.scss';

.todoItem {
  border-bottom: 1px solid $greySecondary;
  width: 100%;
  display: grid;
  grid-template-columns: 80px 1fr 150px 120px;
  height: 58px;

  .item {
    display: flex;
    align-items: center;
    padding-left: 20px;

    .span {
      margin-left: 20px;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $black;
      border-radius: 50%;

      &:hover {
        cursor: pointer;
      }

      &.checked {
        border-color: $blue;
        box-shadow: 0px 4px 4px rgba(19, 78, 193, 0.15);
      }
    }
  }

  .blue {
    color: $blue;
  }

  .orange {
    color: $orange;
  }
}
</style>