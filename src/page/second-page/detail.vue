<template>
  <div class="detail">
    <!-- <CHeader>二级页面菜单</CHeader> -->
    <div class="back" @click="back">back</div>
    <div class="detail-container">
      <div class="container" v-for="(item,index) in listDetail" :key="index">
        <div class="left-img">
          <img :src="item.icon" alt="">
        </div>
        <div class="right">
          <p>{{item.name}}</p>
          <router-link class="go-shopping" :to="{path:'/threeDetail/'+item.address}" tag="div">立即购买</router-link>
        </div>
      </div>
    </div>
    <footer>页脚</footer>
  </div>
</template>
<script>
  import CHeader from '../../components/c-header.vue'
  export default {
    name:'',
    components:{
      CHeader
    },
    data () {
      return {
        listDetail: [
          {
            icon:require('../../assets/image/ScaleOccupancy_icon1.png'),
            name:'上海易立德',
            address:'ShangHai'
          },
          {
            icon:require('../../assets/image/PriceSection_icon1.png'),
            name:'美云智数',
            address:'MideaSum'
          },
          {
            icon:require('../../assets/image/ProductLineup_icon1.png'),
            name:'信息科技',
            address:'Technology'
          },
          {
            icon:require('../../assets/image/ScaleOccupancy_icon.png'),
            name:'技术总部',
            address:'Total'
          }
        ]
      }
    },
    methods:{
      back () {
        this.$router.push('/')
      },
    },
    mounted () {

    }
  }
</script>

<style lang="less" scoped>
  .back {
    width: 100px;
    height: 100px;
    border: 1px solid red;
  }

.detail-container {
  display: inline-block;
  margin-top: 30px;
  // height: 400px;
  border: 1px solid blue;
  .container  {
    float: left;
    width: 180px;
    height: 200px;
    border: 1px solid red;
    .left-img {
      float: left;
    }
    .right {
      float:left;
      margin-left: 30px;
      .go-shopping {
        width: 60px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        background: green;
        border-radius: 50px;
      }
    }
  }
}

.detail-container .container:nth-child(2) {
  margin-left: 8px;
}
.detail-container .container:nth-of-type(3) {
  margin-top: 10px;
}
.detail-container .container:nth-child(4) {
  margin-left: 8px;
  margin-top: 10px;
}

footer {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
</style>

<style>
.vux-header {
  background: #1a204b !important;
}
</style>
