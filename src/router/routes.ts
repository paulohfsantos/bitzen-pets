import { RouteRecordRaw } from 'vue-router';
// import Register from '../pages/Register.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('pages/Index.vue'),
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('pages/Register.vue'),
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
