import Vue from 'vue';
import App from './App';
// 引入 vue-rescource 组件
import VueResource from 'vue-resource';
// 引入路由模块
import VueRouter from 'vue-router';
// 引入组件goods
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

import './common/stylus/index.styl';

// 安装路由模块
Vue.use(VueRouter);
Vue.use(VueResource);

// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

//定义组件，这里是一个根组件
let app = Vue.extend(App);

// 创建一个路由实例
let router = new VueRouter({
	linkActiveClass: 'active'
});

// 定义路由规则
// 每条路由规则映射到一个组件(
// 组件可以是一个使用 Vue.extend 创建的构造函数也可以是一个组件选项对象)
// 可实现嵌套路由
//
router.map({
	'/goods': {
		component: goods
	},
	'/ratings': {
		component: ratings
	},
	'/seller': {
		component: seller
	}
});

// 启动应用
// 路由会创建一个App实例，并且挂在到选择符 #app 匹配的元素上
router.start(App, '#app');

// 默认加载模块
router.go('/goods');