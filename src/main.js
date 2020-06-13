import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

Vue.config.productionTip = false

// 引入mint-ui 
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';

// 引入全局样式
import '../public/css/global.css';

// 配置axios
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://localhost:4000/';

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
		Mint.Indicator.open('加载中...');
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
		Mint.Indicator.close();
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

// 引入全局组件(导航)
import NavBar from './components/common/navbar/NavBar.vue';
Vue.component(NavBar.name, NavBar)

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
