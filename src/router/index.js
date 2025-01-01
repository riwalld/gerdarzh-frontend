

import { createWebHistory, createRouter } from 'vue-router'
import Wordstems from "../components/Wordstems/Wordstems.vue";
import ProperNouns from "../components/Propernouns/ProperNounsList.vue";
import NotImplemented from "../components/Profile/NotImplemented.vue";
import Home from "../components/Home/Home.vue";
import Game from '../components/Game/GameRoot.vue';
import Contact from '../components/Home/Contact.vue';

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
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router