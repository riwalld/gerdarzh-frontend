<script setup lang="ts">
import FooterBar from '@/components/layout/FooterBar.vue'
import NavBar from '@/components/layout/NavBar.vue'
</script>

<template>
  <nav-bar></nav-bar>
  <router-view class="min-h-[calc(100vh-300px)]"></router-view>
  <footer-bar></footer-bar>
</template>
