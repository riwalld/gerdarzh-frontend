<template>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
</template>

<script>
import NavBar from "./Nav/NavBar.vue";
import FooterBar from "./Nav/FooterBar.vue";
export default {
    components: { NavBar, FooterBar },
}
</script>
