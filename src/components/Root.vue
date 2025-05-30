<script setup lang="ts">
import NavBar from "./Nav/NavBar.vue";
import FooterBar from "./Nav/FooterBar.vue";
</script>


<template>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
</template>
