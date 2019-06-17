<template>
  <div id="app">
    <Header/>
    <FavScholarship />
    <NewScholarship/>
    <Footer/>
  </div>
</template>
<style lang="scss">
@import "./assets/styles/general.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: "Montserrat";
}
html,
body,
#app {
  overflow-x: hidden;
  height: 100%;
  background: "##fafaf9";
  /* font-size: 85%; */

  color: $blackText;
  /* font-size: 62.5%; */
  /* @media (max-width: $tablet) { font-size: 58.5%; }
    @media (max-width: $mobile) { font-size: 52.5%; } */
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
import NewScholarship from "./components/newScholarship/NewScholarship.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    FavScholarship,
    NewScholarship
  }
};
</script>
