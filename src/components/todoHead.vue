<template>
  <div class="todoItem withPadding">
    <div class="item">
    </div>
    <div class="item leftBorder">
      Описание
    </div>
    <div class="item leftBorder">
      Статус
    </div>
    <div class="item leftBorder">
      Дата
  </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: "todo-head",
})
</script>
<style lang="scss">
@import '@/variables.scss';
.todoItem{
  .leftBorder{
    border-left: 1px solid $grey;
  }
}
.withPadding{
  padding: 14px 0;
}
</style>