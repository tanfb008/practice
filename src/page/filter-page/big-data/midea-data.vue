<template>
  <div class="midea-data">
      <div id="idMidea" style="display:none;">
        welcome    美的大数据
      </div>
      <div class="seconed-card">
        <card headTitle="美的大数据" info="idMidea" headImg="icon_detail-arrow">
          <div style="height:300px">
            <Number></Number>
            <downMuen :muenData="arr"></downMuen>
          </div>
         </card>
      </div>
  </div>
</template>
<script>
  import card from '../../components/card.vue'
  import Number from './components/number.vue'
  import downMuen from './components/downMuen.vue'
  export default {
    name:'',
    components:{
      card,
      Number,
      downMuen
    },
    data () {
      return {
        arr: ['java', 'javascript', 'html', 'c++'],
      }
    }
  }
</script>

<style lang="less" scoped>
  .seconed-card {
    margin-top: 20px;
  }
</style>
