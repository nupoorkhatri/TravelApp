import { createApp } from "vue";

import "../public/main.css";
import App from "./App.vue";
import router from "./router";

// import { createRouter, createWebHistory } from "vue-router";
// import Home from "./views/Home.vue";
// import About from "./views/About.vue";
// import Brazil from "./views/Brazil.vue";
// import Destination from "./views/DestinationShow.vue";
// import Hawaii from "./views/Hawaii.vue";
// import Jamaica from "./views/Jamaica.vue";
// import Panama from "./views/Panama.vue";

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/about",
//     name: "About",
//     component: () => import("./views/About.vue"),
//   },
//   {
//     path: "/brazil",
//     name: "Brazil",
//     component: () => import("./views/Brazil.vue"),
//   },
//   {
//     path: "/destination/:id",
//     component: () => import("./views/DestinationShow.vue"),
//   },
//   {
//     path: "/hawaii",
//     name: "Hawaii",
//     component: () => import("./views/Hawaii.vue"),
//   },
//   {
//     path: "/jamaica",
//     name: "Jamaica",
//     component: () => import("./views/Jamaica.vue"),
//   },
//   {
//     path: "/panama",
//     name: "Paname",
//     component: () => import("./views/Panama.vue"),
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
//   linkActiveClass: "vite-project-active-link",
// });
// export default router;

createApp(App).use(router).mount("#app");
