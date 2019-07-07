<!--
作者：ex_wangwb1
日期：2018-04-16
功能：制作公共样式菜单tap切换选项
描述：tap的个数由传入的菜单名数组长度决定，传出的事件名是从clickButton1开始来算的，通过$emit传出区分不同的点击事件
-->
<template>
  <div class="c-menu">
    <div class="c-change">
      <span class="c-tap" :class="{'active':stateFlag==index}" @click="MenuChange(index)" v-for="(item, index) in menuList" :key="index">{{item}}</span>
    </div>
  </div>
</template>

<script>
/**
 * @augments
 * menuList     - 菜单名数组
 * menuPadding  - 菜单栏内边距
 * stateFlag    - 按钮点击选中状态
 */
export default {
  name: '',
  props: {
    menuList: Array,
    stateFlag: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {

    }
  },
  methods: {
    // 导航的切换
    MenuChange (index) {
      this.$emit('clickButton' + (index + 1))
    }
  }
}
</script>

<style lang="less" scoped>
  .c-change {
    color: #BFBFBF;
    .c-tap {
      display: inline-block;
      line-height: 26px;
      height: 24px;
      padding: 0 10px;
      border: 1px solid #478DFF;
      border-right: none;
    }
    .c-tap:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .c-tap:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-right: 1px solid #478DFF !important;
    }
    .active {
      color: #ffffff;
      background: #478DFF;
    }
  }
</style>

