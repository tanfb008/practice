<template>
  <div  class="echarts">
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        myEcharts: null,
        option: {
          color:['red','yellow','green'],
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              },
              // formatter: (val)=> {
              //   console.log(val)
              //   let array = []
              //   let string = ""
              //   for (let i=0;i < val.length;i++) {
              //     string += val[i].seriesName + "</br>"
              //   }
              //   return string
              // }
          },
          legend: {
              data:['邮件营销','联盟广告','视频广告'],
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  data : ['周一','周二','周三','周四','周五','周六','周日']
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'美的',
                  type:'bar',
                  stack: '广告',
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'联盟',
                  type:'bar',
                  stack: '广告',
                  data:[220, 182, 191, 234, 290, 330, 310]
              },
              {
                  name:'视频',
                  type:'bar',
                  stack: '广告',
                  data:[150, 232, 201, 154, 190, 330, 410]
              },
          ]
        }
      }
    },
    methods: {
      setEcharts() {
        const dom = document.getElementsByClassName('echarts')[0]
        this.myEcharts = this.$echarts.init(dom)
        this.myEcharts.setOption(this.option)
      }
    }
  }
</script>

<style lang="less" scoped>
  .echarts {
    width: 100%;
    height: 200px;
  }
</style>
