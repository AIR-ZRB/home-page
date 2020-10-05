import Vue from "vue";
import App from "./App.vue";

// 引入ElementUI
// import ElementUI from "element-ui";
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

// 引入路由
// import router from "./router/router";
// import VueRouter from "vue-router";
// Vue.use(VueRouter);

// 设置浏览器标题
Vue.directive("title", {
    inserted: function(el) {
        document.title = el.dataset.title;
    },
});


Vue.config.productionTip = false;

new Vue({
    // router,
    render: (h) => h(App),
}).$mount("#app");
