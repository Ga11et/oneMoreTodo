<template>
  <div class="todoItem">
    <div class="item">
      {{ content.isDone }}
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
import Vue from 'vue'

export default Vue.extend({
  name: 'todo-item',
  props: ['content'],
  methods: {

  }
})
</script>
<style lang="scss">
@import '@/variables.scss';
.todoItem{
  border-bottom: 1px solid $greySecondary;
  width: 100%;
  display: grid;
  grid-template-columns: 80px 1fr 150px 120px;
  height: 58px;
  .item{
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .blue{
    color: $blue;
  }
  .orange{
    color: $orange;
  }
}
</style>