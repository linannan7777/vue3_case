// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

import gloablComponent from './components/index';
app.use(gloablComponent);
app.mount('#app')
