import { createRouter, createWebHistory } from 'vue-router';
import teacher from './teacher';
import admin from './admin';
import student from './student';
import CheckState from './navigation-guard/check-state';
import CheckIdentity from './navigation-guard/check-identity';

const routes = [
  {
    path: '/',
    name: 'login',
    meta: { auth: false },
    component: () => import(
      /* webpackChunkName: "Login" */
      '../pages/Login'
    ),
  },
  ...teacher,
  ...student,
  ...admin,
  {
    path: '/404',
    component: () => import(
      /* webpackChunkName: "404" */
      '../components/common/404'
    ),
  },
  {
    path: '/*',
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(CheckState);
router.beforeEach(CheckIdentity);

export default router;
