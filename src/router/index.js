import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Articles from "../views/Articles.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/Articles/:id",
    name: "Articles",
    component: Articles,
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
