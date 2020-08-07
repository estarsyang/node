
import VueRouter from 'vue-router'

// import Index from "@/pages/index.vue";
// import Detail from "@/pages/detail.vue";
const Index = ()=>import('@/pages/index.vue')
const Detail = ()=>import('@/pages/detail.vue')



const routes = [
  { path: '/', component: Index },
  { path: '/more', component: Detail }
]


const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
  mode: 'history'
})

export default router