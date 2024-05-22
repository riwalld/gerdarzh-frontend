<template>
  <footer>

    <div class="footer-content">
      <div style="display: flex;     align-items: center;">
        <img style="top: 30px;" :src=navLogo width="75" height="75" alt="logo gerdarzh">
        <h1 style="color: rgb(200,200,200); font-size: 150%;"><a href="/">Gerdarzh</a></h1>
      </div>
      <div>
        <div class="footer-element"><a :href="$router.resolve({ name: 'Contact' }).href">> Contact</a></div>
        <div class="footer-element"><a :href="$router.resolve({ name: 'Home' }).href">> Accueil</a></div>
        <div class="footer-element"><a :href="$router.resolve({ name: 'SessionGame' }).href">> Jeu Gerdarzh</a></div>
        <div class="footer-element"><a :href="$router.resolve({ name: 'Worsdtems' }).href">> Lexique</a></div>
        <div class="footer-element"><a :href="$router.resolve({ name: 'ProperNouns' }).href">> Entités</a></div>
        <div class="footer-element"><a :href="$router.resolve({ name: 'UserProfile' }).href">> Profile</a></div>
      </div>
      <div>
        <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr"> <img style="top: 30px;;"
            :src=copyRightImg height="50" alt="test" /></a>
      </div>
    </div>
  </footer>
</template>
<script>
import NavLogo from '../../images/battersea_logo.png'
import CopyRightImg from '../../images/Logo_CreativeC.png'

export default {

  data() {
    return {
      navLogo: NavLogo,
      copyRightImg: CopyRightImg
    }
  }

}</script>