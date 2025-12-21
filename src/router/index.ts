

import { createWebHistory, createRouter } from 'vue-router'
import Wordstems from "@/views/WordstemsView.vue";
import WordstemArticle from "@/components/wordstems/WordstemArticle.vue";
import ProperNouns from "@/components/propernouns/ProperNounsList.vue";
import NotImplemented from "@/components/profile/NotImplemented.vue";
import Home from "@/views/HomeView.vue";
import Game from '@/components/game/GameRoot.vue';

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
  },
  {
    path: '/wordstems/:wordStemName/:wordStemId/',
    name: 'wordstem-detail',
    component: WordstemArticle,
  }
  ,
  {
    path: '/nouns/list',
    name: 'ProperNouns',
    component: ProperNouns
  },
  {
    path: '/sessionGame',
    name: 'game',
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router