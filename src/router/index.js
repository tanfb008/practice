import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Defail  from '../page/second-page/detail.vue'
import ScaleOccupancyTrend from '@/page/midea-data/ScaleOccupancyTrend'
import PriceSection from '@/page/midea-data/PriceSection'
import ProductLineupMach from '@/page/midea-data/ProductLineupMach'

import ThreeDetail from '../page/three-page/three-datail.vue'
import ShangHai from '../page/three-page/child-page/shanghai.vue'
import MideaSum from '../page/three-page/child-page/mideaSum.vue'
import Total from '../page/three-page/child-page/total.vue'
import Technology from '../page/three-page/child-page/technology.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: ScaleOccupancyTrend,
        },
        {
          path: '/ScaleOccupancyTrend',
          name:'ScaleOccupancyTrend',
          component: ScaleOccupancyTrend,
        },
        {
          path: '/PriceSection',
          name:'PriceSection',
          component: PriceSection,
        },
        {
          path: '/ProductLineupMach',
          name:'ProductLineupMach',
          component: ProductLineupMach,
        }
      ]
    },
    {
      path:'/detail',
      name: Defail,
      component:Defail,
    },
    {
      path:'/threeDetail',
      name:'ThreeDetail',
      component: ThreeDetail,
      redirect:'/threeDetail/ShangHai',
      children:[
        {
          path:'shanghai',
          name:'ShangHai',
          component: ShangHai
        },
        {
          path:'mideaSum',
          name:'MideaSum',
          component: MideaSum
        },
        {
          path:'total',
          name: 'Total',
          component: Total
        },
        {
          name:'Technology',
          path:'technology',
          component: Technology
        }
      ]
    }
  ]
})
