import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Noticias from './views/Noticias.vue'
import Equipos from './views/Equipos.vue'
import Calendario from './views/Calendario.vue'
import Resultados from './views/Resultados.vue'
import Login from './views/Login.vue'
import Tabla from './views/Tabla.vue'


Vue.use(Router)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { CarouselPlugin } from 'bootstrap-vue'
Vue.use(CarouselPlugin)
import { BEmbed } from 'bootstrap-vue'
Vue.component('b-embed', BEmbed)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Noticias',
      name: 'Noticias',
      component: Noticias
    },
    {
      path: '/Equipos',
      name: 'Equipos',
      component: Equipos
    },
    {
      path: '/Calendario',
      name: 'Calendario',
      component: Calendario
    },
    {
      path: '/Resultados',
      name: 'Resultados',
      component: Resultados
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Tabla',
      name: 'Tabla',
      component: Tabla
    }
  ]
})
