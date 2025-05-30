<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const burger = ref(false);
const { t, locale } = useI18n();

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
      <div style="min-width: 500px;">
        <h1 style="color: rgb(255,230,200); font-size: 32px;">
          <a href="/">Gerdarzh | <span style="font-weight: 100; font-size: smaller;">{{ t('celtic_language_history')
              }}</span></a>
        </h1>
      </div>

      <div class="summary" id="summary-menu">
        <div class="summary-btn"><a :href="$router.resolve({ name: 'Home' }).href">{{ t('home') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'SessionGame' }).href">{{ t('game') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'Worsdtems' }).href">{{ t('lexicon') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'ProperNouns' }).href">{{ t('entities') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'UserProfile' }).href">{{ t('profile') }}</a></div>
        <div class="p-4 text-center">
          <h1 class="text-2xl font-bold mb-4">{{ t('welcome') }}</h1>
          <label class="block mb-2 text-gray-600">{{ t('language') }} :</label>
          <select v-model="locale" class="border px-3 py-2 rounded shadow">
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="br">Brezhoneg</option>
          </select>
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
