<script setup lang="ts">
import FooterBar from '@/components/layout/FooterBar.vue'
import NavBar from '@/components/layout/NavBar.vue'
</script>

<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
  <footer-bar></footer-bar>
</template>
