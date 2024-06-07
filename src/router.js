import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import NatureView from './views/NatureView.vue'
import CivilisationView from './views/CivilisationView.vue'
import PeopleView from './views/PeopleView.vue'
import CombatView from './views/CombatView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/nature', component: NatureView },
  { path: '/civilisation', component: CivilisationView },
  { path: '/people', component: PeopleView },
  { path: '/combat', component: CombatView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
