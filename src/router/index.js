import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'inicio',
    component: () => import('../views/InicioView.vue')
  },
  {
    path: '/conocenos',
    name: 'conocenos',
    component: () => import('../views/ConocenosView.vue')
  },
  {
    path: '/autismo',
    name: 'autismo',
    component: () => import('../views/AutismoView.vue')
  },
  {
    path: '/ayudanos',
    name: 'ayudanos',
    component: () => import('../views/AyudanosView.vue')
  },
  {
    path: '/citasyadmiciones',
    name: 'citasyadmiciones',
    component: () => import('../views/CitasyAdmicionesView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import('../views/ServiciosView.vue')
  },
  {
    path: '/tienda',
    name: 'tienda',
    component: () => import('../views/TiendaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
