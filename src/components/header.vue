<template>
  <header class="header">
    <h1 class="heading">To do list</h1>
    <button class="button" @click="addHandler"><SvgIcons type="+"/></button>
  </header>
</template>
<script>
import Vue from 'vue'
import SvgIcons from './svgIcons.vue';
export default Vue.extend({
    name: "custom-header",
    methods: {
        addHandler: function () {
            this.$root.$emit("openPopup");
        }
    },
    components: { SvgIcons }
})
</script>
<style lang="scss">
@import "@/variables";
.header{
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .heading{
    padding-left: 40px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
  }
  .button{
    width: 40px;
    height: 40px;
    background-color: $background;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      cursor: pointer;
      background-color: $backgroundHover;
    }
  }
}
</style>