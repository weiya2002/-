export default [{
    path: 'home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../shou/Home.vue')
},
{
    path: 'fl',
    name: 'fl',
    component: () => import(/* webpackChunkName: "about" */ '../shou/fl.vue')
},
{
    path: 'my',
    name: 'my',
    component: () => import(/* webpackChunkName: "about" */ '../shou/my.vue')
},
{
    path: 'cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '../shou/cart.vue')
},]
