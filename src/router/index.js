import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("../views/DestinationShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),

    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("../views/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: "/protected",
    name: "protected",
    component: () => import("../views/Protected.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "vite-project-active-link",
  scrollBehavior(to, from, savedPosition) {
    return { top: null, left: null, behavior: null };
  },
});
router.beforeEach((to, from) => {
  if (to.meta.requireAuth && !window.user) {
    return { name: "login" };
  }
});

export default router;
