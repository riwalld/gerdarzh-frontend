<template>
  <footer>
    <div><a :href="$router.resolve({ name: 'Contact' }).href">Contact</a></div>
    <div id="CreativeC">
      <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr"> <img style="top: 30px;;"
          :src=copyRightImg height="50" alt="test" /></a>

    </div>
  </footer>
</template>
<script>
import CopyRightImg from '../../images/Logo_CreativeC.png'

export default {

  data() {
    return {
      copyRightImg: CopyRightImg
    }
  }

}</script>