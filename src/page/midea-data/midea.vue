<template>
  <div class="midea">
      <div id="idHome" style="display:none;">
        welcome
      </div>
      <card ref="show" info="idHome" class="concent" headTitle="美云智数" headImg="icon_detail-img">
        <ul class="wrap-list">
          <li v-for="(item,index) in childrenPages">
            <p @click="changeRouter(item.code)">
              <img :src="actived === item.code ? item.iconOn:item.icon" alt="">
              <a :class="{'addColor': actived=== item.code}">{{item.name}}</a>
            </p>
          </li>
        </ul>
        <router-view/>
      </card>
  </div>
</template>
<script>
  import card from '../../components/card'
  export default {
    name:'',
    components:{
      card
    },
    data () {
      return {
        actived: '',
        childrenPages: [{
            code: 'ScaleOccupancyTrend',
            name: '规模占有率',
            icon: require('../../assets/image/ScaleOccupancy_icon.png'),
            iconOn: require('../../assets/image/ScaleOccupancy_icon1.png')
          },
          {
            code: 'PriceSection',
            name: '价格段/容量段',
            icon: require('../../assets/image/PriceSection_icon.png'),
            iconOn: require('../../assets/image/PriceSection_icon1.png')
          },
          {
            code: 'ProductLineupMach',
            name: '产品阵容',
            icon: require('../../assets/image/ProductLineup_icon.png'),
            iconOn: require('../../assets/image/ProductLineup_icon1.png')
          }
        ]
      }
    },
    methods:{
      changeRouter(val) {
        this.actived = val
        this.$router.replace('/' + val)
      },
    },
    created() {
      this.actived = this.$route.path.replace('/', '')
      this.actived = this.actived === '' ? 'ScaleOccupancyTrend' : this.actived
    }
  }
</script>

<style lang="less" scoped>
  .concent {
      margin-top: 20px;
    }
  .wrap-list {
    margin-top: 20px;
    padding-bottom: 20px;
    display: flex;
    display: -webkit-flex;
    li {
      flex: 1;
      text-align: center;
      p {
        display: inline-block;
      }
      img {
        height: 33px;
        width: auto;
      }
      a {
        display: block;
        color: #bfbfbf;
      }
    }
    .addColor {
      color: #5399FC;
    }
  }
  .a {
    height: 400px;
    line-height: 200px;
  }
</style>

