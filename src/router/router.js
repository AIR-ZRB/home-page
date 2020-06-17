import VueRouter from "vue-router";



import home from "../pages/home";
import blog from "../pages/blog";
import leaveWord from "../pages/leave-word";
import items from "../pages/items";


export default new VueRouter({
    routes: [
        {path: "/",redirect: "home"},
        {path: "/home",component: home},
        {path: "/blog",component: blog},
        {path: "/leaveWord",component: leaveWord},
        {path: "/items",component: items},
        // {path: "*", redirect: "home"}
    ]
})


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}