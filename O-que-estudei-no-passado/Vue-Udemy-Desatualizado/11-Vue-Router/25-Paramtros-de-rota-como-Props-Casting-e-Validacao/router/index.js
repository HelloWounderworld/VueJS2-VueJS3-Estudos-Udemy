import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contatos from '../views/contatos/ContatosView.vue'
import ContatoDetalhes from '../views/contatos/ContatoDetalhes.vue'
import ContatoEditar from '../views/contatos/ContatoEditar.vue'
import ContatosHome from '../views/contatos/ContatosHome.vue'
import Error404View from '../views/Error404View.vue'
import Error404Contatos from '../views/contatos/Error404Contatos.vue'

const routes = [
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
    // path: '/meus-contatos',
    name: 'Contatos',
    alias: ['/meus-contatos', '/lista-de-contatos'],
    component: Contatos,
    props: (route) => {
      const busca = route.query.busca
      return busca ? { busca } : {}
    },
    children: [
      // {
      //   path: 'teste', // meus-contatos.com/contatos/teste
      //   component: ContatoEditar
      // },
      // {
      //   path: ':id', // meus.contatos.com/contatos/1, 2 ou 3
      //   component: ContatoDetalhes,
      //   name: 'contato',
      //   props: true
      // },
      // {
      //   path: ':id', // meus.contatos.com/contatos/1, 2 ou 3
      //   component: ContatoDetalhes,
      //   name: 'contato',
      //   props: {
      //     id: 10
      //   }
      // },
      {
        path: ':id', // meus.contatos.com/contatos/1, 2 ou 3
        component: ContatoDetalhes,
        name: 'contato',
        props: route => {
          return {
            id: +route.params.id
          }
        }
      },
      // {
      //   path: 'teste', // meus-contatos.com/contatos/teste
      //   component: ContatoEditar
      // },
      {
        path: ':id/editar', // meuns-contatos.com/contatos/2/editar
        alias: ':id/alterar',
        components: {
          default: ContatoEditar,
          'contato-detalhes': ContatoDetalhes
        },
        props: {
          default: true,
          'contato-detalhes': true
        }
      },
      {
        path: '',
        component: ContatosHome,
        name: 'contatos'
      },
      {
        path: '/contatos/:pathMatch(.*)*',
        component: Error404Contatos
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/contatos', redirect: '/meus-contatos'
  // },
  // {
  //   path: '/', redirect: '/contatos'
  // }
  // {
  //   path: '/', redirect: { name: 'contatos' }
  // }
  {
    path: '/', redirect: () => {
      return '/contatos'
      // return {
      //   name: 'contatos'
      // }
    }
  },
  // {
  //   path: '/contatos/:id', // meus.contatos.com/contatos/1, 2 ou 3
  //   component: ContatoDetalhes
  // }
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/contatos'
  // }
  // {
  //   path: '/contatos/:pathMatch(.*)*',
  //   component: Error404Contatos
  // },
  {
    path: '/:pathMatch(.*)*',
    component: Error404View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: 'history'
})

export default router
