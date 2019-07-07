<template>
  <div class="ProductLineupMach">
    产品阵容
    <div class="box">
      <div class="left-tab">
        <ul class="left-list">
          <li class="head">
            <span>首航</span>
          </li>
          <li>
            <span>
              数据
            </span>
          </li>
        </ul>
      </div>
      <div class="right-tab">
        <ul class="right-list">
          <li class="head">
            <span v-for="(item,index) in arr" :key="index">{{item}}</span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    data () {
      return {
        arr:['海尔','小天鹅','东门子','西门子','美的']
      }
    },
    methods: {

    },
    mounted () {

    }
  }
</script>

<style lang="less" scoped>
  .ProductLineupMach {
    height: 200px;
    // line-height: 200px;
    // text-align: center;
  }

  .left-tab,.right-tab {
    float: left;
  }
  .head {
    background: #1a1a1a;
    line-height: 30px;
  }
  .left-tab {
    li {
      span {
        display: inline-block;
        width: 80px !important;
        text-align: center;
      }
    }
  }
  .right-tab {
    li {
      span {
        display: inline-block;
        width: 50px;
        line-height: 30px;
      }
    }
  }
  .right-tab {
    overflow: auto;  //overflow:scroll  overflow-x: auto;
    width: 275px;
  }
  .right-list {
    width: 375px;
  }
</style>

