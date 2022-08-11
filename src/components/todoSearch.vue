<template>
  <div class="todoSearch">
    <div class="search">
      <SvgIcons type="search" />
      <input :value="filterValue" @input="inputChangeHandler" class="input" placeholder="Поиск ID, Имени, статуса или даты" />
    </div>
    <div class="sort">
      <SvgIcons type="drop" class="dropSVG" />
      <p class="text">Сортировать по:</p>
      <select class="select" @change="selectChangeHandler">
        <option>Дата</option>
        <option>Статус</option>
      </select>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import SvgIcons from './svgIcons.vue';
import store from '@/store'

export default Vue.extend({
  name: 'todo-search',
  components: { SvgIcons },
  computed: {
    filterValue () {
      return store.state.filterValue
    }
  },
  methods: {
    inputChangeHandler: function (event) {
      store.commit('setFilterValue', event.target.value)
    },
    selectChangeHandler: function (event) {
      store.commit('setSortValue', event.target.value)
    }
  }
})
</script>
<style lang="scss">
@import '@/variables';
.todoSearch{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 58px;
  padding-left: 40px;

  .search{
    display: flex;
    align-items: center;

    .input{
      border: none;
      font-size: 16px;
      line-height: 19px;
      font-weight: 400;
      margin-left: 16px;
      height: 40px;
      outline: none;
      width: 300px;

      &:focus-visible{
        border-bottom: 1px solid $black;
      }

      &::placeholder{
        color: $grey;
      }
    }
  }

  .sort{
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
    position: relative;

    .select{
      border: none;
      font-family: inherit;
      font-size: inherit;
      height: 40px;
      width: fit-content;
      padding: 0 20px 0 15px;
      appearance: none;
      outline: none;

      &:focus-visible{
        border-bottom: 1px solid $black;
      }
    }

    .dropSVG{
      position: absolute;
      right: 0;
    }
  }
}
</style>