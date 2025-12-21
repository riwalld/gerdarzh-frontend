<script setup lang="ts">
import NavBar from "@/components/layout/NavBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";
</script>


<template>
    <nav-bar class="top-0"></nav-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
</template>
