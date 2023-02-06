import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contatos from '../views/contatos/ContatosView.vue'
import ContatoDetalhes from '../views/contatos/ContatoDetalhes.vue'
import ContatoEditar from '../views/contatos/ContatoEditar.vue'
import ContatosHome from '../views/contatos/ContatosHome.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contatos',
    name: 'Contatos',
    component: Contatos,
    children: [
      {
        path: ':id', // meus.contatos.com/contatos/1, 2 ou 3
        component: ContatoDetalhes,
        name: 'contato'
      },
      {
        path: ':id/editar',
        components: {
          default: ContatoEditar,
          'contato-detalhes': ContatoDetalhes
        }
      },
      {
        path: '', // meus.contatos.com/contatos/1, 2 ou 3
        component: ContatosHome
      }
    ]
  },
  // {
  //   path: '/contatos/:id', // meus.contatos.com/contatos/1, 2 ou 3
  //   component: ContatoDetalhes
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: 'history'
})

export default router
