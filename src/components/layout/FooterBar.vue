<script setup lang="ts">
import NavLogo from '../../images/battersea_logo.png';
import CopyRightImg from '../../images/Logo_CreativeC.png';
import FooterButton from './FooterButton.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const navLogo = NavLogo;
const copyRightImg = CopyRightImg;
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="flex flex-col pt-8 h-72">
    <div class="flex flex-row relative w-[95%] max-w-[1200px] justify-between">
      <div class="flex flex-row text-center items-center">
        <img class="h-16" :src=navLogo alt="logo gerdarzh">
        <h1 style="color: rgb(200,200,200); font-size: 150%;">
        </h1>
      </div>
      <div class="flex flex-col pb-8 min-w-48">
        <FooterButton text="home" router="Home"></FooterButton>
        <FooterButton text="game" router="game"></FooterButton>
        <FooterButton text="lexicon" router="Worsdtems"></FooterButton>
        <FooterButton text="entities" router="ProperNouns"></FooterButton>
        <FooterButton text="profile" router="UserProfile"></FooterButton>
        <a href="mailto:contact@gerdarzh.bzh">contact@gerdarzh.bzh</a>
      </div>
      <div class="pt-1">
        <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr"> <img class="mt-8"
            :src=copyRightImg alt="CC-BY-NC-SA" /></a>
      </div>
    </div>
    <div class="text-white">
      @ Copyright 2024 - {{ currentYear }} GERDARZH
    </div>
  </footer>
</template>
