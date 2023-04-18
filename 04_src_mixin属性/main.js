import Vue from 'vue'
import App from './App.vue'

// 全局混合
// import {mixin,mixin2} from '../mixin'


Vue.config.productionTip = false

// Vue.mixin(mixin)
// Vue.mixin(mixin2)

new Vue({
  render: h => h(App),
}).$mount('#app')

