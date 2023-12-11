// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import App from './app.vue';
// import routerConfig from './router';
// Vue.use(VueRouter);
// var router = new VueRouter(routerConfig)
// import './css/base.css'
// new Vue({
//     el: '#app',
//     router: router,
//     render: h => h(App)
// });

import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import routes from './router';
import './css/base.css'

Vue.use(VueRouter);

Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;

  console.log('container---', container)

  // console.log('--', [...routes.routes, ...routers.getRoutes()])

  console.log('window.__POWERED_BY_QIANKUN__', window.__POWERED_BY_QIANKUN__)

  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue-qk/' : '/',
    mode: 'history',
    routes: routes.routes,
  });

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

console.log('环境判定！！！', !window.__POWERED_BY_QIANKUN__)

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}