import { createRouter, createWebHashHistory } from "vue-router";

import daybookRouter from "@/modules/daybook/router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  ...daybookRouter,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
