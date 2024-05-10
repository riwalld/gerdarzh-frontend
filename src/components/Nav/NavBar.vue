<template>
  <header>
    <img style="top: 30px;;" :src=navLogo width="50" height="50" alt="test">
    <h1 style="color: rgb(51, 51, 51); font-size: 20px;"><a href="/">Celtiadur</a></h1>

    <div class="summary">
      <div class="language"></div>

      <div class="summary-btn"><router-link to="/">Accueil</router-link></div>
      <div class="summary-btn"><a :href="$router.resolve({ name: 'SessionGame' }).href">Gerdarzh</a></div>
      <div class="summary-btn"><router-link to="/wordstems/list">Lexique</router-link></div>
      <div class="summary-btn"><router-link to="/nouns/list">Noms Propres</router-link></div>
      <div class="summary-btn"><router-link to="/userprofile">Mon profil</router-link></div>
      <div class="summary-btn"><router-link to="/leaderboard">Classement</router-link></div>
    </div>
  </header>
</template>
<script>
import NavLogo from '../../images/logo.png'

export default {

  data() {
    return {
      navLogo: NavLogo
    }
  }

}</script>