import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: "", redirect: { name: "Home" } },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/Users.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('accessToken'));
  // if the user is not authenticated, `next` is called twice
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // if the user is authenticated
  if (to.name === 'Login' && isAuthenticated) next({ name: 'Home' })
  next()
});

export default router
