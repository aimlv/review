import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import toast from 'components/common/toast/index.js'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
  loading:require('./assets/image/lazyload/placeholder.png')
})
Vue.config.productionTip = false

Vue.use(toast)
Vue.prototype.$bus = new Vue()
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')