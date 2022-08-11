<template>
  <svg v-if="type === 'x'" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L4 4M7 7L4 4M4 4L7 1M4 4L1 7" stroke="white" stroke-linecap="round" />
  </svg>
  <svg v-else-if="type === '+'" width="20" height="20" viewBox="0 0 20 20" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="9" width="2" height="20" fill="#314B99" />
    <rect x="20" y="9" width="2" height="20" transform="rotate(90 20 9)" fill="#314B99" />
  </svg>
  <svg v-else-if="type === 'ok'" width="10" height="11" viewBox="0 0 10 11" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5L5 10.5L9.5 1" stroke="#134EC1" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <svg v-else-if="type === 'search'" width="18" height="18" viewBox="0 0 18 18" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.8645 11.3208H12.0515L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z"
      fill="#59BBA6" />
  </svg>
  <svg v-else-if="type === 'drop'" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7L13 1" stroke="#16191D" />
  </svg>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'svg-icons',
  props: ['type']
})
</script>
<style lang="scss">
</style>