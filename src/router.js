import { createMemoryHistory, createRouter } from 'vue-router'

// import HomeView from './views/HomeView.vue'
import NatureView from './views/NatureView.vue'
import CivilisationView from './views/CivilisationView.vue'
import PeopleView from './views/PeopleView.vue'
import CombatView from './views/CombatView.vue'
import InspirationView from './views/InspirationView.vue'
import NpcView from './views/NpcView.vue'

const routes = [
  { path: '/', name: 'inspiration', component: InspirationView },
  { path: '/nature', name: 'nature', component: NatureView },
  { path: '/civilisation', name: 'civilisation', component: CivilisationView },
  { path: '/people', name: 'people', component: PeopleView },
  { path: '/combat', name: 'combat', component: CombatView },
  { path: '/npc', name: 'make an npc', component: NpcView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
