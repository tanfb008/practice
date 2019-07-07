<template>
  <div class="number">
    <div class="number-left">
      购物数量
    </div>
    <div class="number-right">
      <div class="min" @click="minChange">-</div>
      <div class="wrap-input">
        <input type="text" v-model="num" @keyup="inputHandler">
      </div>
      <div class="max" @click="maxChange">+</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  props:{
    min: {
      type:[Number],
      default: 1
    },
    max: {
      type: [Number],
      default:5
    }
  },
  data () {
    return {
      num: 1
    }
  },
  methods:{
    minChange () {
      if (this.num <= this.min) {
        return;
      }
      this.num--
    },
    maxChange () {
      if(this.num >= this.max ) {
        return;
      }
      this.num++
    },
    inputHandler () {
      let fix
      if (typeof this.num === 'string') {
        fix = Number(this.num.replace(/\D/g,''))
      } else {
        fix = this.num
      }
      if (fix > this.max || fix < this.min) {
         fix = this.min
      }
      this.num = fix
    }
  }
}
</script>

<style lang="less" scoped>
.number-left {
  display: inline-block;
}
.number-right {
  display: inline-block;
  margin-left: 20px;
  height: 30px;
  vertical-align: middle;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-size: cover;
  .min {
    float: left;
    width: 40px;
    height: 30px;
    color: red;
    background: #ddd;
    font-size: 18px;
    line-height: 30px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .wrap-input {
    float: left;
    width: 60px;
    height: 30px;
    input {
      width: 60px;
      height: 30px;
      outline: none;
      text-align: center;
    }
  }
  .max {
    float: left;
    width: 40px;
    height: 30px;
    background: #ddd;
    line-height: 30px;
    color: red;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
</style>
