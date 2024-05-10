

import { createWebHistory, createRouter } from 'vue-router'
import Wordstems from "../components/Wordstems/Wordstems.vue";
import ProperNouns from "../components/Propernouns/ProperNouns.vue";
import NotImplemented from "../components/Profile/NotImplemented.vue";
import Home from "../components/Home/Home.vue";
import Game from '../components/Game/GameRoot.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wordstems/list',
    name: 'Worsdtems',
    component: Wordstems
  }
  ,
  {
    path: '/nouns/list',
    name: 'ProperNouns',
    component: ProperNouns
  },
  {
    path: '/sessionGame',
    name: 'SessionGame',
    component: Game
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: NotImplemented
  }
  ,
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: NotImplemented
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router