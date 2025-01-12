
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import NavLogo from '../../images/battersea_logo.png';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const navLogo = NavLogo;
const burger = ref(false);

function handleBurgerMenu() {
  burger.value = !burger.value;
}

onMounted(() => {
  burger.value = false;
});
</script>

<template>
  <header>
    <img style="top: 30px;" :src="navLogo" width="80" height="80" alt="test">
    <h1 style="color: rgb(51, 51, 51); font-size: 32px;">
      <a href="/">{{ t('title') }}</a>
    </h1>

    <div class="summary" id="summary-menu">
      <div class="summary-btn"><a :href="$router.resolve({ name: 'Home' }).href">{{ t('home') }}</a></div>
      <div class="summary-btn"><a :href="$router.resolve({ name: 'SessionGame' }).href">{{ t('game') }}</a></div>
      <div class="summary-btn"><a :href="$router.resolve({ name: 'Worsdtems' }).href">{{ t('lexicon') }}</a></div>
      <div class="summary-btn"><a :href="$router.resolve({ name: 'ProperNouns' }).href">{{ t('entities') }}</a></div>
      <div class="summary-btn"><a :href="$router.resolve({ name: 'UserProfile' }).href">{{ t('profile') }}</a></div>
      <div class="language"></div>
    </div>

    <div class="burger-menu" style="display: none;">
      <div class="burger-icon" id="burger-icon" @click="handleBurgerMenu">
        &#9776; <!-- Burger icon -->
      </div>
      <div class="burger-list" v-show="burger">
        <div class="summary-btn"><a :href="$router.resolve({ name: 'Home' }).href">{{ t('home') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'SessionGame' }).href">{{ t('game') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'Worsdtems' }).href">{{ t('lexicon') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'ProperNouns' }).href">{{ t('entities') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'UserProfile' }).href">{{ t('profile') }}</a></div>
        <div class="language"></div>
      </div>
    </div>
  </header>
</template>
