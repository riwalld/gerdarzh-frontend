

import { createMemoryHistory, createRouter } from 'vue-router'
import Wordstems from "../components/Wordstems/Wordstems.js";
import ProperNouns from "../components/Propernouns/ProperNouns.js";
import NotImplemented from "../components/Profile/NotImplemented.js";
import Home from "../components/Home/Home.js";
import Game from '../components/Game/GameRoot.js';

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
  history: createMemoryHistory(),
  routes,
})

export default router