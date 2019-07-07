<template>
<!-- @touchmove.prevent.stop -->
  <div class="home-filter-page" >
    <popup v-model="showPopup" position="right" >
      <div style="width:200px;">
        <filterTime ></filterTime>
      </div>
    </popup>
  </div>
</template>

<script>
  import {  Popup } from 'vux'
  import { mapMutations, mapGetters } from 'vuex'
  import filterTime from '../../components/filter-time.vue'
  export default {
    name:'',
    components: {
      Popup,
      filterTime
    },
    data () {
      return {
      }
    },
    computed:{
      ...mapGetters([
        'showFilter'
      ]),
      showPopup: {
        get () {
          return this.$store.state.tfb.showFilter
        },
        set (val) {
          this.updateShowFilter(val)
        }
      }
    },
    methods:{
      ...mapMutations([
        'updateShowFilter'
      ]),
    }
  }
</script>

<style lang="less" scoped>
  .vux-popup-dialog {
    background-color: #252b54 !important;
  }
</style>
