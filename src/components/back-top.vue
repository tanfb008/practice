<template>
  <div class="back-top" id="show">
    回到顶部
  </div>
</template>

<script>
  export default {
    name:'',
    props:{
      address:[String]
    },
    data () {
      return {

      }
    },
    methods: {
    },
    mounted () {
        this.$nextTick(()=>{
        var ashow = document.getElementById('show');
		    	document.onscroll = function(){
		  	 	 if(getscroll()>20){
		  	    	 	ashow.style.display = 'block';
		  	    	 }else{
		  	    	 	ashow.style.display = 'none';
		  	    	 }
		  	}

        ashow.onclick = function(){
            setscroll(0);
        }
        function getscroll(){
            return window.pageYOffset || document.documentElement.scrollTop;
        }
        function setscroll(num){
            document.body.scrollTop =document.documentElement.scrollTop = num;
        }
      })
    }
   }
</script>

<style lang="less" scoped>
 .back-top {
   position: fixed;
   display: none;
   right:10px;
   right:10px;
   bottom: 30px;
   width: 60px;
   height: 60px;
   color: red;
   background: #eee;
   text-align: center;
   line-height: 60px;
   border-radius:100%;
 }
</style>
