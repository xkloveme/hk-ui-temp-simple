/*
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-06-26 09:50:23
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-02 14:03:39
 */
import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import HkUI from 'hekr-ui'
import 'hekr-ui/lib/hk-ui.css';
// Vue.config.productionTip = false

Vue.use(Element)
Vue.use(HkUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
