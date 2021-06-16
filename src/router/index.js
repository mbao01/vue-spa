import { createRouter, createWebHistory } from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "../pages/Home.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../pages/About.vue");
const Store = () =>
  import(/* webpackChunkName: "store" */ "../pages/Store.vue");

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/store",
      name: "Store",
      component: Store,
    },
  ],
});

export default router;
