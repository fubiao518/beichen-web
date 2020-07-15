// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Login from './views/sys/login/Login'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
/* eslint-disable no-new */
new Vue({
  el: '#test',
  router,
  components: { Login },
  template: '<Login/>'
})
