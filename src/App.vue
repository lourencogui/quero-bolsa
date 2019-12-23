<template>
  <div id="app">
    <TopSection />
    <FavScholarship />
    <BottomSection />
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
  height: 100vh;
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
import TopSection from "./components/TopSection/TopSection.vue";
import BottomSection from "./components/BottomSection/BottomSection.vue";
import FavScholarship from "./components/FavScholarship/FavScholarship.vue";

export default {
  name: "app",
  components: {
    TopSection,
    BottomSection,
    FavScholarship
  }
};
</script>
