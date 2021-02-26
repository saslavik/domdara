import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

import CompanyHome from '@/components/CompanyHome.vue';
import ProductsHome from '@/components/ProductsHome.vue';
import ServicesHome from '@/components/ServicesHome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '', component: CompanyHome },
      { path: 'products', component: ProductsHome },
      { path: 'services', component: ServicesHome },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/eho',
    name: 'EHO',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Eho.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
