
<script setup lang="ts">
import NavLogo from '../../images/battersea_logo.png';
import CopyRightImg from '../../images/Logo_CreativeC.png';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const navLogo = NavLogo;
const copyRightImg = CopyRightImg;
</script>

<template>
  <footer style="flex-direction: column;padding-top: 40px;">

    <div class="footer-content">
      <div style="display: flex;     align-items: center;">
        <img style="top: 30px;" :src=navLogo width="75" height="75" alt="logo gerdarzh">
        <h1 style="color: rgb(200,200,200); font-size: 150%;">
  <a href="/">{{ t('title') }}</a>
</h1>
</div>
<div style="padding-bottom: 30px;">
  <div class="footer-element">
    <a :href="$router.resolve({ name: 'Home' }).href">> {{ t('home') }}</a>
  </div>
  <div class="footer-element">
    <a :href="$router.resolve({ name: 'SessionGame' }).href">> {{ t('game') }}</a>
  </div>
  <div class="footer-element">
    <a :href="$router.resolve({ name: 'Worsdtems' }).href">> {{ t('lexicon') }}</a>
  </div>
  <div class="footer-element">
    <a :href="$router.resolve({ name: 'ProperNouns' }).href">> {{ t('entities') }}</a>
  </div>
  <div class="footer-element">
    <a :href="$router.resolve({ name: 'UserProfile' }).href">> {{ t('profile') }}</a>
  </div>
  <div class="footer-element">
    <a :href="$router.resolve({ name: 'Contact' }).href">> {{ t('contact') }}</a>
  </div>
</div>
      <div style="padding-top: 40px;">
        <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr"> <img style="top: 30px;;"
            :src=copyRightImg height="50" alt="test" /></a>
      </div>
    </div>
    <div style="color: azure;">
      @ Copyright 2024 GERDARZH
    </div>
  </footer>
</template>
