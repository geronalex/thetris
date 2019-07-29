// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import dc from './assets/json/dc.json'
import marvel from './assets/json/marvel.json'
import VueRouter from 'vue-router'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueI18n from 'vue-i18n'
import i18n from './lang/message'

Vue.use(VueI18n)
Vue.use(BootstrapVue)
Vue.use(VueRouter)

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false
Vue.prototype.$Dc = dc
Vue.prototype.$Marvel = marvel



const router = new VueRouter({
      mode: 'history',
      routes:[{
      		path:"/",
      		name:'root',
      		component: require('./components/HelloWorld.vue').default


      },

{
      		path:"/fiche/:id",
      		name:"fiche",
      		component: require('./components/fichePerso.vue').default,
      		props:true,


      },

      {
      		path:"/edit/:id",
      		name:"edit",
      		component: require('./components/editHero.vue').default,
      		props:true,


      },

      {
      		path:"/new",
      		name:"newHero",
      		component: require('./components/newHero.vue').default,



      }



      ]

})



/* eslint-disable no-new */
new Vue({
  el: '#myApplication',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})




