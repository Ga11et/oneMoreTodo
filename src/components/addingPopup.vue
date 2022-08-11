<template>
  <div class="addingPopupContainer">
    <form class="content">
      <div class="head">
        <p class="heading">Создать новую задачу</p>
        <button class="exit" type="button" @click="exitHandler"><SvgIcons type="x" /></button>
      </div>
      <label class="inputContainer">
        <p class="label">Описание</p>
        <input v-model="newTodoText" class="input" />
      </label>
      <button class="create" type="submit" @click.prevent="createHandler">Создать</button>
    </form>
  </div>
</template>
<script>
import { TodoAPI } from '@/api/api'
import store from '@/store'
import Vue from 'vue'
import SvgIcons from './svgIcons.vue'

export default Vue.extend({
    name: "adding-popup",
    data: function () {
        return {
            newTodoText: ""
        };
    },
    methods: {
        createHandler: async function () {
            if (this.newTodoText !== "") {
                this.$root.$emit("closePopup");
                await TodoAPI.addTodo(this.newTodoText);
                store.dispatch("fetchTodos");
            }
        },
        exitHandler: function () {
            this.$root.$emit("closePopup");
        }
    },
    components: { SvgIcons }
})
</script>
<style lang="scss">
@import '@/variables';

.addingPopupContainer {
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .content {
    background-color: white;
    border: 1px solid $greySecondary;
    border-radius: 6px;
    width: 400px;
    padding: 40px 40px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);

    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .heading {
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
      }

      .exit {
        width: 22px;
        height: 22px;
        border: none;
        border-radius: 5px;
        background-color: $blueDark;

        &:hover{
          cursor: pointer;
          background-color: $blueDarkHover;
        }
      }
    }

    .inputContainer{
      width: 100%;
      padding: 30px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .label{
        font-size: 14px;
        line-height: 14px;
        font-weight: 400;
        padding-bottom: 5px;
      }

      .input{
        border: 1px solid $greySecondary;
        border-radius: 8px;
        padding-left: 16px;
        width: 100%;
        height: 40px;
      }
    }

    .create{
      border: none;
      padding: 12px 40px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 400;
      background-color: white;
      color: $blue;

      &:hover{
        cursor: pointer;
        background-color: $greySecondary;
      }
    }
  }
}
</style>