<template>
  <div class="three-datail">
    <!-- <CHeader>三级页面</CHeader> -->
    <div class="three-containor">
      <div class="left">
        <img :src="getUrl" alt="" width="80" height="80" @click="backTopPage()">
        <ul>
          <router-link active-class="active" :to="{path:'/threeDetail/'+item.nav}" tag="li" v-for="(item,index) in threeData" :key="index">{{item.title}}</router-link>
        </ul>
      </div>
      <div class="right-aside">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import CHeader from '../../components/c-header.vue'
  export default {
    name:'',
    components: {
      CHeader
    },
    data () {
      return {
        threeData:[
          {
            title:'上海易立德',
            nav:'ShangHai',
          },
          {
             title:'美云智数',
             nav:'MideaSum',
          },
          {
            title:'信息技术',
            nav: 'Technology',
          },
          {
            title:'技术总部',
            nav:'Total',
          }
        ],
        imgUrl:{
          '/threeDetail/ShangHai':require('../../assets/image/ScaleOccupancy_icon1.png'),
          '/threeDetail/MideaSum':require('../../assets/image/PriceSection_icon1.png'),
          '/threeDetail/Technology':require('../../assets/image/ProductLineup_icon1.png'),
          '/threeDetail/Total':require('../../assets/image/ScaleOccupancy_icon.png')
        }
      }
    },
    computed:{
      getUrl () {
        return this.imgUrl[this.$route.path]
      }
    },
    methods: {
      backTopPage () {
        this.$router.push('/detail')
      },
    },
    mounted () {

    }
  }
</script>

<style lang="less" scoped>
  .left {
    float: left;
    width: 40%;
    border: 1px solid red;
    li {
      padding: 8px;
    }
  }
  .right-aside {
    float: left;
  }
  .active {
    color: #5399FC;
  }
</style>
