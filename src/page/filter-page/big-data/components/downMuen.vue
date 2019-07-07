<template>
  <div class="downMuen">
    <div class="muen-show"  @click="selectorShow">
      <div class="muen-left">{{this.muenData[sateNum]}}</div>
      <div class="muen-icon">
        <span class="icon_detail-arrow"></span>
      </div>
    </div>
    <ul class="muen-selector" v-show="flag">
      <li v-for="(item,index) in muenData" :key="index" @click="selectorChange(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'',
    props: {
      muenData:{
        type: Array
      }
    },
    data () {
      return {
        sateNum:0,
        flag: false,
      }
    },
    methods: {
      selectorShow () {
        this.flag = !this.flag
      },
      selectorChange (index) {
        this.flag = false
        this.sateNum = index
      }
    }
  }
</script>

<style lang="less" scoped>
  .downMuen {
    display: inline-block;
    position: relative;
    .muen-show {
      height: 30px;
      border: 1px solid #eee;
      .muen-left {
        float: left;
        min-width: 100px;
        text-align: center;
        line-height: 30px;
      }
      .muen-icon {
        float: left;
        padding-right: 10px;
        line-height: 30px;
      }
    }
    .muen-selector {
      position: absolute;
      width: 99%;
      border-top:none !important;
      border: 1px solid #eee;
      z-index: 5;
      li {
        line-height: 20px;
        text-align: center;
      }
    }
  }
</style>
