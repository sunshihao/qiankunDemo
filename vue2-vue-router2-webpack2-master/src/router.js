import index from './views/index.vue'
import css from './views/css.vue'
import stylus from './views/stylus.vue'
import less from './views/less.vue'
import sass from './views/sass.vue'
import image from './views/image.vue'
import iconfont from './views/iconfont.vue'

const BASE_ROUTE = '/in'

export default {
    linkActiveClass: 'active',
    routes: [{
        path: "/",
        component: index
    }, {
        path: '/in',
        component: index, // 此处有巨大问题就是若是以简单根的话和正常的不一样我的天啊
        children: [
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: 'css',
                component: css
            },
            {
                // 当 /user/:id/posts 匹配成功
                // UserPosts 会被渲染在 User 的 <router-view> 中
                path: '',
                component: stylus
            }
        ]
    }, {
        path: '/css',
        component: css
    }, {
        path: '/stylus',
        component: stylus
    }, {
        path: '/less',
        component: less
    }, {
        path: '/sass',
        component: sass
    }, {
        path: '/image',
        component: image
    }, {
        path: '/iconfont',
        component: iconfont
    }, {
        path: '/async',
        component: () => import(/* webpackChunkName: "async" */'./views/async.vue')
    }]
}
