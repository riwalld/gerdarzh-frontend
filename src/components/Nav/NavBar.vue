<template>
  <header>
    <img style="top: 30px;;" :src=navLogo width="80" height="80" alt="test">
    <h1 style="color: rgb(51, 51, 51); font-size: 32px;"><a href="/">Gerdarzh</a></h1>

    <div class="summary">
      <div class="summary-btn"><a :href="$router.resolve({ name: 'Home' }).href">Accueil</a></div>
      <div class="summary-btn"><a :href="$router.resolve({ name: 'SessionGame' }).href">Jeu Gerdarzh</a></div>
      <div class="summary-btn"><a :href="$router.resolve({ name: 'Worsdtems' }).href">Lexique</a></div>
      <div class="summary-btn"><a :href="$router.resolve({ name: 'ProperNouns' }).href">Entités</a></div>
      <div class="summary-btn"><a :href="$router.resolve({ name: 'UserProfile' }).href">Profile</a></div>
      <div class="language"></div>
    </div>
  </header>
</template>
<script>
import NavLogo from '../../images/battersea_logo.png'

export default {

  data() {
    return {
      navLogo: NavLogo
    }
  }

}</script>