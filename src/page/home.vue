<template>
  <div class="home"  :style="[{'height':backViewHeight(),'overflow':showFilter?'auto':''}]">
    <!-- <c-header>欢迎来到home</c-header> -->
    <div class="header-fixed">
      <div class="head">
        <div class="arrow" @click.stop.prevent="">
          <!-- <img src="../assets/image/title_back.png"> -->
        </div>
        水晶球 — 产品魔方
        <span @click="homeFilter()">筛选</span>
      </div>
    </div>
    <div class="concent-seat">
      <!-- 美云智数 -->
      <midea></midea>
      <!-- 大数据 -->
      <mideaData></mideaData>
      <load-more :tip="'正在加载'" v-if="true"></load-more>
      <divider class="bottom-line" v-else>我是有底线的aaaaaaaa</divider>
      <backTop></backTop>
    </div>
  </div>
</template>

<script>
  import {
    mapMutations,
    mapGetters
  } from 'vuex'
  import { Divider,LoadMore} from 'vux'
  import mideaData from '../page/big-data/midea-data.vue'
  import midea from '../page/midea-data/midea.vue'
  import backTop from '../components/back-top.vue'
  export default {
    name: '',
    components: {
      midea,
      mideaData,
      Divider,
      LoadMore,
      backTop
    },
    computed: {
      ...mapGetters([
        'showFilter'
      ])
    },
    data() {
      return {
      }
    },
    methods: {
      ...mapMutations([
        'updateShowFilter'
      ]),
      homeFilter() {
        this.updateShowFilter(true)
      },
      //处理筛选页滑动的时候里面内容也滚动问题
      backViewHeight () {
        let  viewHeight = document.documentElement.clientHeight
        if (this.showFilter===true) {
          return viewHeight
        }
      }
    },
    mounted () {

    }
  }
</script>

<style lang="less" scoped>
  .head {
    position: relative;
    font-size: 22px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #fff;
    .arrow {
      position: absolute;
      top: 0;
      left: 0;
      padding: 13px 15px 9px 10px;
      img {
        width: 13px;
        height: 22px;
        display: block;
        line-height: 22px;
      }
    }
    span {
      display: inline-block;
      position: absolute;
      top: 0;
      right: 20px;
      font-size: 14px;
    }
  }
  .concent-seat {
    position: relative;
    top: 44px;
    padding-bottom: 50px;
  }
  .bottom-line {
    margin-top: 20px;
    padding-top: 0;
    margin-bottom: 4px;
    color: #5F6D96;
    font-size: 14px;
  }

  //处理滑动页面的
  .home {
    overflow:scroll;
    width: 100%;
    overflow: hidden;
  }

</style>

