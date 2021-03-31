export default [{
    path: 'signin',
    name: 'signin',
    component: () => import(/* webpackChunkName: "about" */ '../hide/sign in.vue')
}, {
    path: 'giftcertificate',
    name: 'giftcertificate',
    component: () => import(/* webpackChunkName: "about" */ '../hide/giftcertificate.vue')
}, {
    path: 'bargain',
    name: 'bargain',
    component: () => import(/* webpackChunkName: "about" */ '../hide/bargain.vue')
}, {
    path: 'detailcolumn',
    name: 'specialcolumn',
    component: () => import(/* webpackChunkName: "about" */ '../hide/specialcolumn.vue')
}, {
    path: 'special',
    name: 'special',
    component: () => import(/* webpackChunkName: "about" */ '../hide/special.vue')
},
{
    path: 'detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "about" */ '../hide/detail.vue')
},]