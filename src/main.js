import { createApp } from 'vue'
import App from './App.vue'
import "./theme/index.scss"
import "/@/assets/iconfont/iconfont.css"
import "lcl-plugin-next/css"
import lclPluginNext from "lcl-plugin-next"
const app = createApp(App)
lclPluginNext(app)
app.mount('#app')
