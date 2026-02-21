import { createWebHistory, createRouter } from 'vue-router'
import Wordstems from '@/views/WordstemsView.vue'
import WordstemArticle from '@/components/wordstems/WordstemArticle.vue'
import ProperNouns from '@/components/propernouns/ProperNounsList.vue'
import NounsCards from '@/components/propernouns/ProperNounCards.vue'
import LitCards from '@/components/propernouns/LitteralTransCards.vue'
import NotImplemented from '@/components/profile/NotImplemented.vue'
import Home from '@/views/HomeView.vue'
import Game from '@/components/game/GameRoot.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/lexicon/list',
    name: 'wordstems',
    component: Wordstems
  },
  {
    path: '/lexicon/:wordStemName/:wordStemId/',
    name: 'wordstem-detail',
    component: WordstemArticle
  },
  {
    path: '/nouns/list',
    name: 'propernouns',
    component: ProperNouns
  },
  {
    path: '/nouncards',
    name: 'NounCard',
    component: NounsCards
  },
  {
    path: '/litcards',
    name: 'LitCard',
    component: LitCards
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
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    component: NotImplemented
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
