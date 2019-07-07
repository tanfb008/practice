<template>
  <div class="card">
    <div class="card-head">
      <span>{{headTitle}}</span>
      <i :class="headImg" @click="popupDialog()"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name:'',
    components:{

    },
    props:{
      headTitle: [String],
      headImg: [String],
      info:[String]
    },
    data () {
      return {
      }
    },
    methods:{
      popupDialog () {
        let info = document.getElementById(this.info)
        this.$root.$children[0].infoTitle = info.innerHTML
        this.$root.$children[0].showInfoBox = true
      }
    }
  }
</script>

<style lang="less" scoped>
.card {
   margin-left: 10px;
   margin-right: 10px;
   background: rgba(9, 14, 48, 0.5);
   border-radius: 10px;
  .card-head {
    width: auto;
    height: 40px;
    border-bottom: 1px solid #24396A;
    span {
      display: inline-block;
      margin-left: 10px;
      margin-top: 12px;
    }
  }
}

</style>
