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
  <header class="justify-center m-auto">
    <div class="flex flex-row justify-center w-[100%] max-w-[1200px]">
      <!--<img style="top: 30px;" :src="navLogo" width="80" height="80" alt="test">-->
      <div class="w-[500px]">
        <h1 style="color: rgb(255,230,200); font-size: 32px;">
          <a href="/">Gerdarzh | <span class="font-thin text-sm">{{ t('celtic_language_history')
              }}</span></a>
        </h1>
      </div>

      <div class="text-white flex flex-row px-0 ml-auto mr-5 font-[Lato,Calibri]">
        <div class="summary-btn"><a :href="$router.resolve({ name: 'Home' }).href">{{ t('home') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'SessionGame' }).href">{{ t('game') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'Worsdtems' }).href">{{ t('lexicon') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'ProperNouns' }).href">{{ t('entities') }}</a></div>
        <div class="summary-btn"><a :href="$router.resolve({ name: 'UserProfile' }).href">{{ t('profile') }}</a></div>
        <div class="p-2 text-center-">
          <select v-model="locale" class="border px-3 py-2 rounded shadow text-black">
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="br">Brezhoneg</option>
          </select>
        </div>
      </div>

      <div class="burger-menu hidden">
        <div class="burger-icon" id="burger-icon" @click="handleBurgerMenu">
          &#9776;
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
