import { createRouter, createWebHistory } from "vue-router";

const Home = () =>
  import(
    /* webpackChunkName: "home" */ /* webpackPrefetch: true */ "../pages/Home.vue"
  );
const About = () =>
  import(
    /* webpackChunkName: "about" */ /* webpackPrefetch: true */ "../pages/About.vue"
  );
const Store = () =>
  import(
    /* webpackChunkName: "store" */ /* webpackPrefetch: true */ "../pages/Store.vue"
  );

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
