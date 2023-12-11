import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { registerMicroApps } from 'qiankun'

import App from './App.vue'


import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 在主题中注册
registerMicroApps([
    {
        name: 'app-vue-qk',
        entry: '//localhost:8090',
        // entry: '//127.0.0.1:8077/app-vue/',
        // entry: '/app-vue/',
        container: '#child',
        activeRule: '/app-vue-qk',
        props: {
            routers: router,
        }
    }
]);

app.mount('#app')
