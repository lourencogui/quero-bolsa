<template>
  <div id="app">
    <Header />
    <FavScholarship />
    <Footer />
  </div>
</template>
<style lang="scss">
@import "./assets/styles/general.scss";
@import "./assets/styles/mixins.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: "Montserrat";
  -webkit-font-smoothing: antialiased;
}
html,
body,
#app {
  overflow-x: hidden;
  height: 100%;
  background: "##fafaf9";
  color: $blackText;
}
</style>
<style>
@font-face {
  font-family: "Montserrat";
  src: url("~@/assets/fonts/Montserrat-SemiBold.ttf") format("truetype");
}
</style>

<script>
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";
import FavScholarship from "./components/favScholarship/FavScholarship.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    FavScholarship
  }
};
</script>
