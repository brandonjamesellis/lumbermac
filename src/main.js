import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'
import Test3 from './components/Test3.vue'

//create routes out of components here
const routes = [
  { path: '/', component: Home },
  { path: '/test', component: Test },
  { path: '/test2', component: Test2 },
  { path: '/test3', component: Test3},
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({ 
	routes,
	mode: 'history'
})

//tell vue to use the router plugin
Vue.use(VueRouter)

//start it up boii
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
