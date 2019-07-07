<template>
  <div class="ScaleOccupancyTrend">
      <div class="box">
        <span class="menu-sp" :class="[newArr[index],{'pre':preIndex===index}]" @click="menuClick(index)" v-for="(item,index) in arr" :key="index">
          <a >{{item}}</a>
        </span>
      </div>
      <div class="empty"></div>
      <nav-selector :menuList="arr" :stateFlag="current" @clickButton1="parentBtn1" @clickButton2="parentBtn2" @clickButton3="parentBtn3"></nav-selector>
      <div class="login-btn" @click="loginBtn">登陆</div>
  </div>
</template>

<script>
  import navSelector from '../../components/nav-selector.vue'
  export default {
    name:'',
    components:{
      navSelector
    },
    data () {
      return {
        preIndex:0,
        current:0,
        newArr:[],
        tabIndex: '',
        arr:['全部','新闻联播','change'],
      }
    },
    methods: {
      parentBtn1 () {
        this.current = 0
      },
      parentBtn2 () {
        this.current = 1
      },
      parentBtn3 () {
        this.current = 2
      },
      loginBtn () {
        this.$router.push('/detail')
      },
      // 导航
      menuClick (index) {
        this.preIndex = index
        this.newArr = []
        this.tabIndex = index
        for (let i=0;i < this.arr.length;i++) {
          if (i===index) {
            this.newArr.push('color-blue')
          } else {
            this.newArr.push('')
          }
        }
      }
    },
    mounted () {
      this.menuClick(0)
    }
  }
</script>

<style lang="less" scoped>
 .empty{
   margin-top: 10px;
   height: 20px;
   background: pink;
 }
 .ScaleOccupancyTrend {
   height: 200px;
  //  line-height: 200px;
  //  text-align: center;
 }
 .box {
    position: relative;
    .menu-sp {
          position: relative;
          padding: 0 20px;
      // padding-left: 20px;
    }
    .pre a::after {
      content: '';
      position:absolute;
      left: 0;
      right: 0;
      bottom: -8px;
      height: 4px;
      background: #5399FC;
    }
    .color-blue {
      color: #5399FC;
    }
 }

  .login-btn {
    margin-top: 20px;
    margin-left: 20px;
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: green;
    border-radius: 10px;
  }
</style>

