// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import firebase from '@/service/firebase'
import VueResource from 'vue-resource'
import VueMDCAdapter from 'vue-mdc-adapter'
import 'vue-mdc-adapter/dist/vue-mdc-adapter.min.css'

Vue.use(VueMDCAdapter)
Vue.use(VueResource)
Vue.use(Vuefire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: function () {
    return {
      cat: firebase.database.ref('cat')
    }
  },
  // { cat: firebase.database.ref('cat').orderByChild('created_at') },
  router,
  template: '<App/>',
  components: { App }
})
