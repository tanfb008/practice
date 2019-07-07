import Vue from 'vue'
import Vuex from 'vuex'
// import ws from './ws'
// import cxw from './cxw'
import tfb from './tfb'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tfb
  }
})
