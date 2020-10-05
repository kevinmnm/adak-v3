import Vue from "vue";
import VueRouter from "vue-router";
import Home_block from "../components/home-block.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Block",
    component: Home_block
  },
  {
    path: "/list",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "list" */ "../components/home-list.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
