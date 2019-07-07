<template>
  <div class="PriceSection">
    <echarts ref="chartsMap"></echarts>
  </div>
</template>

<script>
  import echarts from '../../components/echarts.vue'
  export default {
    name: '',
    components: {
      echarts
    },
    data() {
      return {
        echartsaData: [{
            "brandName": '视频广告',
            "brandPerformance": [{
                sales: '30'
              },
              {
                sales: '40'
              },
              {
                sales: '50'
              },
              {
                sales: '60'
              },
            ]
          },
          {
            "brandName": '联盟广告',
            "brandPerformance": [{
                sales: '130'
              },
              {
                sales: '140'
              },
              {
                sales: '150'
              },
              {
                sales: '160'
              },
            ]
          },
          {
            "brandName": '邮件营销',
            "brandPerformance": [{
                sales: '80'
              },
              {
                sales: '90'
              },
              {
                sales: '100'
              },
              {
                sales: '130'
              },
            ]
          }
        ]
      }
    },
    methods: {
      chartsDate() {
        this.$refs.chartsMap.option.series = []
        this.$refs.chartsMap.option.legend.data = []
        for (let i = 0; i < this.echartsaData.length; i++) {
          this.$refs.chartsMap.option.legend.data.push({
            name: this.echartsaData[i].brandName,
            icon: 'roundRect'
          })
          this.$refs.chartsMap.option.series.unshift({
            name:this.echartsaData[i].brandName,
            type:'bar',
            stack:'广告',
            data:[]
          })
        }
        let legendShow = this.$refs.chartsMap.option.series.length
        for (let i=0;i<this.echartsaData.length;i++) {
           for (let j=0;j<this.echartsaData[i].brandPerformance.length;j++) {
             this.$refs.chartsMap.option.series[i].data.push(this.echartsaData[i].brandPerformance[j].sales)
           }
        }
        this.$nextTick(() => {
          this.$refs.chartsMap.setEcharts()
        })
      }
    },
    mounted() {
      this.chartsDate()
    }
  }
</script>

<style lang="less" scoped>
  .PriceSection {
    height: 200px;
  }
</style>

