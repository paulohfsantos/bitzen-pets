import { RouteRecordRaw } from 'vue-router';
import Register from 'pages/Register.vue';
import Login from 'pages/Login.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresAuth: false,
    },
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },

  {
    path: '/',
    name: 'Index',
    component: () => import('pages/Index.vue'),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/pets',
    name: 'Pets',
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },

  {
    path: '/profile',
    name: 'Profile',
    component: () => import('pages/Profile.vue'),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
