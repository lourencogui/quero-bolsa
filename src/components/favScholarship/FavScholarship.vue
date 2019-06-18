<template>
  <div>
    <div class="container">
      <div class="breadcrumb">
        <div class="breadcrumb__item">
          <a class="breadcrumb__text text--s text--secondary text--bold">Home</a>
        </div>
        <div class="breadcrumb__item">
          <a class="breadcrumb__text text--s text--secondary text--bold">Minha conta</a>
        </div>
        <div class="breadcrumb__item breadcrumb__item--selected">
          <a class="breadcrumb__text text--s">Bolsas favoritas</a>
        </div>
      </div>

      <div class="page-info">
        <h2>Bolsas Favoritas</h2>
        <p>Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis</p>
      </div>
      <div class="filter">
        <div class="filter__item filter__item--selected">
          <p>Todos os semetres</p>
        </div>
        <div class="filter__item">
          <p>2º semetre de 2019</p>
        </div>
        <div class="filter__item">
          <p>1º semetre de 2019</p>
        </div>
      </div>

      <div class="scholarships">
        <div class="scholarships__new" @click="openNewScholarship">
          <div>
            <font-awesome-icon icon="plus-circle" color="#18acc4" size="3x"/>
          </div>
          <div class="scholarships__new__info">
            <h2>Adicionar bolsa</h2>
            <strong>Clique para adicionar bolsas de cursos do seu interesse</strong>
          </div>
        </div>
        <FavScholarshipItem/>
      </div>
    </div>
    <NewScholarship ref="newScholarship"/>
  </div>
</template>
<style lang="scss" scoped>
@import "./_favScholarship.scss";
</style>


<script>
import FavScholarshipItem from "./components/FavScholarshipItem/FavScholarshipItem.vue";
import NewScholarship from "../newScholarship/NewScholarship.vue";

export default {
  name: "favScholarship",
  components: {
    FavScholarshipItem,
    NewScholarship
  },
  methods: {
    // addNew() {},
    openNewScholarship() {
      this.$refs.newScholarship.changeVisibility();
    }
  }
};
</script>
