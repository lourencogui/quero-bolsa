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
        <h2 class="text text--xl">Bolsas Favoritas</h2>
        <p class="text text--s text--lightWeight">Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis</p>
      </div>
      <div class="filter">
        <div
          :class="`filter__item ${this.semester === '' && 'filter__item--selected'}`"
          @click="filterFavorites('')"
        >
          <p class="text text--s">Todos os semetres</p>
        </div>
        <div
          :class="`filter__item ${this.semester === '2019.2' && 'filter__item--selected'} `"
          @click="filterFavorites('2019.2')"
        >
          <p class="text text--s">2º semetre de 2019</p>
        </div>
        <div
          :class="`filter__item ${this.semester === '2020.1' && 'filter__item--selected'} `"
          @click="filterFavorites('2020.1')"
        >
          <p class="text text--s">1º semetre de 2020</p>
        </div>
      </div>

      <div class="scholarships">
        <div class="scholarships__new" @click="openNewScholarship">
          <div>
            <font-awesome-icon icon="plus-circle" color="#18acc4" size="3x"/>
          </div>
          <div class="scholarships__new__info">
            <h2 class="text text--lg">Adicionar curso</h2>
            <strong class="text text--xs">Clique para adicionar bolsas de cursos do seu interesse</strong>
          </div>
        </div>
        <FavScholarshipItem
          v-for="scholarShip in filteredFavoriteScholarships"
          :key="scholarShip.id"
          :item="scholarShip"
          v-on:removeFavorite="removeFavorite"
        />
      </div>
    </div>
    <NewScholarship ref="newScholarship" v-on:addFavorites="addFavorites"/>
  </div>
</template>
<style lang="scss" scoped>
@import "./_favScholarship.scss";
</style>


<script>
import FavScholarshipItem from "./components/FavScholarshipItem/FavScholarshipItem.vue";
import NewScholarship from "../newScholarship/NewScholarship.vue";
import axios from "axios";

export default {
  name: "favScholarship",
  components: {
    FavScholarshipItem,
    NewScholarship
  },
  data() {
    return {
      favoriteScholarships: [],
      filteredFavoriteScholarships: [],
      semester: ""
    };
  },
  mounted() {
    const cachedFavorites = JSON.parse(localStorage.getItem("favorites"));
    axios
      .get("https://testapi.io/api/redealumni/scholarships")
      .then(({ data }) => {
        const allWithId = data.map((item, index) => ({
          id: index,
          ...item
        }));
        this.$refs.newScholarship.setScholarships(allWithId);
      });
    if (cachedFavorites) {
      this.favoriteScholarships = cachedFavorites;
    }
    this.filteredFavoriteScholarships = this.favoriteScholarships;
  },
  methods: {
    openNewScholarship() {
      this.$refs.newScholarship.changeVisibility();
    },
    addFavorites([selectedScholarships, allScholarships]) {
      selectedScholarships.forEach(selected => {
        // SÓ ADICIONA AS QUE AINDA NÃO ESTÃO NA LISTA DE FAVORITES
        if (
          !this.favoriteScholarships.filter(
            favorites => favorites.id === selected
          ).length
        ) {
          this.favoriteScholarships = [
            ...this.favoriteScholarships,
            allScholarships.find(item => item.id === selected)
          ];
        }
      });
      this.filteredFavoriteScholarships = this.favoriteScholarships;
      localStorage.setItem(
        "favorites",
        JSON.stringify(this.favoriteScholarships)
      );
      this.$refs.newScholarship.changeVisibility();
    },
    removeFavorite(id) {
      this.favoriteScholarships = this.favoriteScholarships.filter(
        item => item.id !== id
      );
      this.filteredFavoriteScholarships = this.filteredFavoriteScholarships.filter(
        item => item.id !== id
      );
      localStorage.setItem(
        "favorites",
        JSON.stringify(this.favoriteScholarships)
      );
    },
    filterFavorites(semester) {
      this.semester = semester;

      this.filteredFavoriteScholarships = this.favoriteScholarships.filter(
        this.filterRules
      );
    },
    filterRules(item) {
      if (this.semester && this.semester !== item.enrollment_semester) {
        return false;
      }
      return true;
    }
  }
};
</script>
