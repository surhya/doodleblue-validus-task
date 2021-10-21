import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },

  {
    path: "/forgot-password",
    name: "Forgotpassword",
    component: () =>
      import("../views/Forgotpassword.vue"),
  },

  {
    path: "/reset-password",
    name: "Resetpassword",
    component: () =>
      import("../views/Resetpassword.vue"),
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import("../views/Dashboard.vue"),
  },


  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
