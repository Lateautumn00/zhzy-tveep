/*
 * @Description:
 * @Author: lanchao
 * @Date: 2022-04-14 11:21:23
 * @LastEditTime: 2022-05-22 12:42:19
 * @LastEditors: lanchao
 * @Reference:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
installElementPlus(app)
app.use(store).use(router).mount('#app')
