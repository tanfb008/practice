<template>
  <div class="c-header">
    <x-header :left-options="{backText: '', showBack: false}">
      <img class="head_left-icon" src="../assets/image/title_back.png" slot="left" @click="backPage">
      <slot></slot>
    </x-header>
  </div>
</template>

<script>
  import {
    XHeader
  } from 'vux'
  export default {
    name: '',
     components: {
      XHeader
    },
    data() {
      return {

      }
    },
    methods:{
      backPage () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="less" scoped>
.head_left-icon {
  margin-top: -2px;
  width: 13px;
  height: 22px;
}
</style>

