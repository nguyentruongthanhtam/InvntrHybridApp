
import phillipsComp from './assets/vue/pages/phillipsTab.vue'
import itemList from './assets/vue/pages/itemList.vue'
import item from './assets/vue/pages/item.vue'
export default [
  {
    path: '/about/',
    component: require('./assets/vue/pages/about.vue')
  },
  // {
  //   path: '/form/',
  //   component: require('./assets/vue/pages/form.vue')
  // },
  {
    path: '/items/',
    component: itemList
  },
  {
    path: '/item/:id',
    component: item
  },
  {
    path: '/phillips/',
    component: phillipsComp
  },
  {
    path: '/yale/',
    component: require('./assets/vue/pages/yaleTab.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./assets/vue/pages/dynamic-route.vue')
  }
]
