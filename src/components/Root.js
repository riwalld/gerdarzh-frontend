import NavBar from "./Nav/NavBar.js";

export default {

    components: {NavBar},

    template: `
    <nav-bar></nav-bar>
    <router-view></router-view>
    `,

    /*mounted() {
        setTimeout(() => {
            document.title = 'Celtiadur';
        }, 1000);
    },*/
}