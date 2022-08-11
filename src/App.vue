<template>
  <main>
    <MainView />
  </main>
</template>
<script lang='js'>
import Vue from 'vue'
import store from './store';
import MainView from './views/mainView.vue';

export default Vue.extend({
    name: "name",
    mounted: async function () {
        store.dispatch("fetchTodos");
    },
    components: { MainView }
})
</script>
<style lang='scss'>
@import '@/variables';
*{
  box-sizing: border-box;
  margin: 0;
}
@font-face {
  font-family: "Vela Sans";
  src: local("Vela Sans"),
   url(./assets/VelaSans-GX.ttf) format("truetype");
}
:root{
  font-family: "Vela Sans", sans-serif;
}
</style>
