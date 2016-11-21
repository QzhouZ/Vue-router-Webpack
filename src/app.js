/*import App from './index/index.vue'

new Vue({
    el: 'body',
    components: { App }
})
*/

import VueRouter from 'vue-router';
import Index from './index/index.vue';
import User from './user/index.vue';
import UserInfo from './user/info.vue';
import About from './about/index.vue';
import ErrorPage from './components/404.vue';

Vue.use(VueRouter);

var App = Vue.extend({})

var router = new VueRouter()

router.map({
	'/': {
        component: Index
    },
    '/user': {
        component: User
    },
    '/user/:id': {
        component: UserInfo
    },
    '/about': {
        component: About
    },
    '/404': {
        component: ErrorPage
    }
})
router.redirect({
	'*': '/404'
})
router.start(App, 'body')