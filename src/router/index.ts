import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store'
import { apiUserLogin } from "@/API"
import { useStore } from "vuex";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/catalog',
        name: 'Catalog',
        component: () => import('../views/Catalog.vue')
      },
      {
        path: '/catalog/:id',
        name: 'About',
        component: () => import('../views/About.vue')
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function judgeLogin() {
  const sessionEmail = sessionStorage.getItem("email");
  const sessionPassword = sessionStorage.getItem("password");
  if (sessionPassword !== null && sessionEmail !== null) {
    return apiUserLogin({
      Password: sessionPassword,
      Email: sessionEmail,
    })
  } else {
    return Promise.reject()
  }
}

router.beforeEach((to, from, next) => {
  console.log(store.state.isLogin, to)
  if (to.name !== "Login" && store.state.isLogin)
    next()
  else {
    judgeLogin().then(() => {
      store.state.isLogin = true;
      next();
    }).catch(() => {
      if (to.name === "Login")
        next()
      else
        next({ name: "Login" });
    })
  }
})

export default router
