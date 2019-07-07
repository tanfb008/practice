<template>
  <div id="app">
    <transition name="show">
        <router-view/>
    </transition>
    <x-dialog v-model="showInfoBox" hide-on-blur>
      <div class="info__dialog" @touchmove.prevent.stop>
        <div>
          {{infoTitle}}
        </div>
      </div>
    </x-dialog>
    <homeFilterPage></homeFilterPage>
  </div>
</template>

<script>
  import {
    XDialog
  } from 'vux'
  import homeFilterPage from './page/filter-page/home-filter-page.vue'
  export default {
    name: 'App',
    components: {
      XDialog,
      homeFilterPage
    },
    data () {
      return {
        showInfoBox:false,
        infoTitle:'说明'
      }
    },
    mounted () {

    }
  }
</script>

<style lang="less" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #aaa;
  }

  .info__dialog {
    box-sizing: border-box;
    width: 100%;
    height: 400px;
    color: #e9efff;
    background-color: #252B54 !important;
    * {
      box-sizing: border-box;
    }
  }

  .weui-mask {
    z-index: 998;
  }

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.show-enter-active {
  transition: all .3s ease;
}
.show-enter, .show-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(375px);
}
</style>

<style>
  .weui-dialog {
    background-color:#252B54 !important;
  }
</style>
