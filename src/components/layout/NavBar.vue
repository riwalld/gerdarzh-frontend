<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import NavBarButton from '../buttons/NavBarButton.vue'

const burger = ref(false)
const { t, locale } = useI18n()

function handleBurgerMenu() {
  burger.value = !burger.value
}
const selectLocale = (lang: string) => {
  locale.value = lang
}

onMounted(() => {
  burger.value = false
})
</script>

<template>
  <header class="sticky">
    <div class="flex justify-between">
      <!--<img style="top: 30px;" :src="navLogo" width="80" height="80" alt="test">-->
      <div class="w-[200px] ml-28">
        <h1 style="color: rgb(255, 230, 200); font-size: 32px">
          <RouterLink :to="{ name: 'home' }">Gerdarzh</RouterLink>
        </h1>
      </div>

      <div class="w-96 text-white flex items-center justify-center font-[Lato,Calibri]">
        <NavBarButton route="wordstems" title="lexicon"></NavBarButton>
        <NavBarButton route="propernouns" title="entities"></NavBarButton
        ><NavBarButton route="game" title="game"></NavBarButton>
        <NavBarButton route="UserProfile" title="profile"></NavBarButton>
        <NavBarButton route="NounCard" title="cards"></NavBarButton>
      </div>

      <div class="p-2 mx-10 w-32">
        <button @click="selectLocale('br')" class="pl-2 py-1 text-white text-sm font-thin">
          <span :class="locale == 'br' ? 'bold' : 'text-xs text-gray-400'"> BR </span>
        </button>
        <button @click="selectLocale('en')" class="pl-2 py-1 text-white text-sm font-thin">
          <span :class="locale == 'en' ? 'bold' : 'text-xs text-gray-400'"> EN </span>
        </button>
        <button @click="selectLocale('fr')" class="pl-2 py-1 text-white text-sm font-thin">
          <span :class="locale == 'fr' ? 'bold' : 'text-xs text-gray-400'"> FR </span>
        </button>
      </div>
    </div>
  </header>
</template>
