import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Login from '@/views/login.vue'
import Signup from '@/views/signup.vue'
import Users from '@/views/users.vue'
import Cookies from "js-cookie";
import AppLayout from '@/layouts/Layout.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      layout: AppLayout,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      layout: null,
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    meta: {
      layout: null,
    },
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
      layout: AppLayout,
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//to make login signup without layout
router.beforeEach((to, from, next) => {
  const layout = to.meta.layout || AppLayout;
  to.meta.layout = layout;
  next();
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  let loggedIn = Cookies.get('user');
  console.log("loggedinnnnn---",loggedIn);
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    console.log();
    next('/login');
  } else {
    next();
  }
});
export default router




















// import Vue from "vue";
// import VueRouter from "vue-router";;
// import Home from '../views/Home.vue'
// Vue.use(VueRouter);
// const router = new VueRouter({
//   mode: "history",
//   routes: [
//     {
//       path: '/',
//       name: 'Home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'About',
//       component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//     }
//   ]
// });

// export default router;


