<template>
  <div class="filter-time">
    <p>
      <input type="text" v-model="barInner" @focus="selectOnfocus" @blur="selectOnblur" ref="search">
      <span></span>
      <ul class="menu" v-show="menuFlag">
        <li v-if="filterStr(item)" v-for="(item,index) in timeArr" :key="index" @click="selectorTime(item)">{{item}}</li>
      </ul>
    </p>
  </div>
</template>

<script>
  import utils from '../utility/utility.js'
  import {
    mapGetters
  } from 'vuex'
  export default {
    name: '',
    data() {
      return {
        menuFlag: false,
        timeArr: [],
        barInner: utils.getDataTime()
      }
    },
    computed: {
      ...mapGetters([
        'filtersTime'
      ])
    },
    methods: {
      // 时间的输入匹配筛选
      filterStr(val) {
        return val.indexOf(this.barInner) > -1 ? true : false
      },
      //  input点击事件
      selectOnfocus() {
        this.menuFlag = !this.menuFlag
        this.barInner = ''
      },
      // 失去焦点
      selectOnblur() {
        this.menuFlag = false
        this.barInner = utils.getDataTime()
      },
      // 下拉筛选时间时间
      selectorTime(val) {
        this.barInner = val
      },
      // 时间的数据
      getTime(val) {
        let yearMonthArr = val.split('-')
        let month = yearMonthArr[1] - 0
        for (let i = 2014; i < yearMonthArr[0]; i++) {
          for (let j = 1; j <= 12; j++) {
            this.timeArr.unshift(i + '-' + utils.formatter(j))
          }
        }
        for (let i = 1; i <= month; i++) {
          this.timeArr.unshift(yearMonthArr[0] + '-' + utils.formatter(i))
        }
        return this.timeArr
      }
    },
    mounted() {
      this.timeArr = this.getTime(utils.getDataTime())
    }
  }
</script>

<style lang="less" scoped>
  p {
    position: relative;
    margin: 10px;
    width: 150px;
    height: 30px;
    input {
      text-indent: 20px;
      position: absolute;
      width: 150px;
      height: 30px;
      background: #aaa;
      outline: none;
      border-radius: 2px;
      z-index: 1;
    }
    span {
      position: absolute;
      top: 5px;
      right: 10px;
      z-index: 2;
      display: inline-block;
      width: 10px;
      height: 10px;
      border-left: 2px solid blueviolet;
      border-bottom: 2px solid blueviolet;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
    .menu {
      position: absolute;
      left: 0.5px;
      top: 29px;
      width: 150px;
      max-height: 170px;
      overflow-y: auto;
      text-align: center;
      background: #fff;
      color: #000;
      li {
        padding: 10px 0;
      }
    }
  }
</style>

