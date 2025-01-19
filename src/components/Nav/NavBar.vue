<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const burger = ref(false);
const { t, locale } = useI18n();

function changeLanguage(lang: string) {
  locale.value = lang;
}

function handleBurgerMenu() {
  burger.value = !burger.value;
}

onMounted(() => {
  burger.value = false;
});
</script>

<template>
  <header style="justify-content:center ;  margin: 0 auto;">
    <div style="display: flex; justify-content:center ; max-width: 1100px; width: 100%;">
      <!--<img style="top: 30px;" :src="navLogo" width="80" height="80" alt="test">-->
      <h1 style="color: rgb(255,230,200); font-size: 32px;">
        <a href="/">{{ t('title') }}</a>
      </h1>

      <div class="summary" id="summary-menu">
        <div class="summary-btn"><a :href="$router.resolve({ name: 'Home' }).href">{{ t('home') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'SessionGame' }).href">{{ t('game') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'Worsdtems' }).href">{{ t('lexicon') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'ProperNouns' }).href">{{ t('entities') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'UserProfile' }).href">{{ t('profile') }}</a></div>
        <div style="display: flex; flex-direction: column;">

          <span @click="changeLanguage('br')" :class="{
            'bold': locale === 'br',
          }" class="change-lang">
            brezhoneg
          </span>
          <span @click="changeLanguage('fr')" :class="{
            'bold': locale === 'fr',
          }" class="change-lang">
            français
          </span>
          <span @click="changeLanguage('en')" :class="{
            'bold': locale === 'en',
          }" class="change-lang">
            english
          </span>
        </div>
      </div>

      <div class="burger-menu" style="display: none;">
        <div class="burger-icon" id="burger-icon" @click="handleBurgerMenu">
          &#9776; <!-- Burger icon -->
        </div>
        <div class="burger-list" v-show="burger">
          <div class="summary-btn"><a :href="$router.resolve({ name: 'Home' }).href">{{ t('home') }}</a></div>
          <div class="summary-btn"><a :href="$router.resolve({ name: 'SessionGame' }).href">{{ t('game') }}</a></div>
          <div class="summary-btn"><a :href="$router.resolve({ name: 'Worsdtems' }).href">{{ t('lexicon') }}</a></div>
          <div class="summary-btn"><a :href="$router.resolve({ name: 'ProperNouns' }).href">{{ t('entities') }}</a>
          </div>
          <div class="summary-btn"><a :href="$router.resolve({ name: 'UserProfile' }).href">{{ t('profile') }}</a></div>
        </div>
      </div>
    </div>
  </header>
</template>
