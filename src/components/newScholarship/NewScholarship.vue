<template>
  <transition name="fade">
    <div key="modal" v-if="visible" class="container-modal">
      <div class="close" @click="changeVisibility()">
        <font-awesome-icon :icon="['fas', 'times']" color="#FFF" size="lg" />
      </div>
      <div class="modal">
        <div class="modal__title">
          <h2 class="text--lg text--dark">Adicionar bolsa</h2>
          <p class="text--s">Filtre e adicione as bolsas de seu interesse.</p>
        </div>

        <div class="modal__filter">
          <div class="modal__filter-top">
            <div class="modal__filter-item">
              <label class="text--xs text--dark">SELECIONE SUA CIDADE</label>
              <select class="select" v-model="filterCity">
                <option>Todos</option>
                <option v-for="(city, index) in cities" :key="index">
                  {{ city }}
                </option>
              </select>
            </div>
            <div class="modal__filter-item">
              <label class="text--xs text--dark"
                >SELECIONE O CURSO DE SUA PREFERÊNCIA</label
              >
              <select class="select" v-model="filterCourse">
                <option>Todos</option>
                <option v-for="(course, index) in courses" :key="index">
                  {{ course }}
                </option>
              </select>
            </div>
          </div>
          <div class="modal__filter-bottom">
            <div class="modal__filter-type">
              <div>
                <label class="text--xs text--dark"
                  >COMO VOCÊ QUER ESTUDAR?</label
                >
              </div>
              <div class="modal__type-options">
                <div class="modal__type-checkbox">
                  <input
                    class="checkbox"
                    type="checkbox"
                    id="chk-presential"
                    v-model="filterPresential"
                  />
                  <label for="chk-presential" class="text--s">Presencial</label>
                </div>
                <div class="modal__type-checkbox">
                  <input
                    class="checkbox"
                    type="checkbox"
                    id="chk-ead"
                    v-model="filterEad"
                  />
                  <label for="chk-ead" class="text--s">A distância</label>
                </div>
              </div>
            </div>
            <div class="modal__filter-price">
              <div class="modal__price-options">
                <p class="text--xs text--dark">ATÉ QUANTO PODE PAGAR?</p>
                <p class="text--xs">R$ 10.000</p>
              </div>
              <div>
                <VueSlider
                  :dotSize="25"
                  :max="10000"
                  :interval="50"
                  :value="10000"
                  :lazy="true"
                  v-model="filterPrice"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="modal__sort">
          <div class="modal__sort-right">
            <p class="text--s">Resultado:</p>
          </div>
          <div class="modal__sort-left">
            <p class="text--s">Ordenar por:</p>
            <select class="select select--text text--s">
              <option class="text--s">NOME DA FACULDADE</option>
            </select>
          </div>
        </div>

        <div class="modal__results">
          <NewScholarshipItem
            :key="scholarship.id"
            v-for="scholarship in filteredScholarships"
            :item="scholarship"
            v-on:selectItem="selectItem"
          />
        </div>

        <div class="modal__buttons">
          <button
            @click="changeVisibility"
            class="modal__button modal__button--outline"
            name="cancel"
          >
            Cancelar
          </button>
          <button
            v-bind:class="
              selectedScholarships.length
                ? 'modal__button modal__button--yellow'
                : 'modal__button modal__button--disabled'
            "
            @click="addFavorites"
            name="add"
          >
            Adicionar bolsa(s)
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
@import "./_newScholarship.scss";
</style>

<script>
import NewScholarshipItem from "../NewScholarshipItem/NewScholarshipItem";
import VueSlider from "vue-slider-component";
import axios from "axios";
import { sortArr } from "../../assets/utils";

export default {
  name: "NewScholarship",
  components: {
    NewScholarshipItem,
    VueSlider
  },
  data() {
    return {
      visible: false,
      scholarships: [],
      filteredScholarships: [],
      selectedScholarships: [],
      favoriteScholarships: [],
      cities: [],
      courses: [],
      filterEad: false,
      filterPresential: false,
      filterCity: "TODOS",
      filterCourse: "TODOS",
      filterPrice: 10000
    };
  },
  mounted() {
    this.selectedScholarships = [];
    axios
      .get("https://testapi.io/api/redealumni/scholarships")
      .then(({ data }) => {
        const allWithId = data.map((item, index) => ({
          id: index,
          ...item
        }));
        this.setScholarships(allWithId);
      });
  },
  watch: {
    filterEad: function() {
      this.filteredScholarships = this.scholarships.filter(this.filterRules);
    },
    filterPresential: function() {
      this.filteredScholarships = this.scholarships.filter(this.filterRules);
    },
    filterPrice: function() {
      this.filteredScholarships = this.scholarships.filter(this.filterRules);
    },
    filterCity: function() {
      this.filteredScholarships = this.scholarships.filter(this.filterRules);
    },
    filterCourse: function() {
      this.filteredScholarships = this.scholarships.filter(this.filterRules);
    }
  },
  methods: {
    changeVisibility() {
      this.visible = !this.visible;
    },
    setScholarships(scholarships) {
      this.scholarships = sortArr(scholarships, "university.name");
      this.filteredScholarships = this.scholarships;
      this.cities = [...new Set(scholarships.map(item => item.campus.city))];
      this.courses = [...new Set(scholarships.map(item => item.course.name))];
    },
    filterRules(item) {
      const {
        filterCity,
        filterCourse,
        filterEad,
        filterPresential,
        filterPrice
      } = this;

      if (
        filterCity &&
        filterCity !== item.campus.city &&
        filterCity.toUpperCase() !== "TODOS"
      ) {
        return false;
      }
      if (
        filterCourse &&
        filterCourse !== item.course.name &&
        filterCourse.toUpperCase() !== "TODOS"
      ) {
        return false;
      }

      //SE AS DUAS OPÇÕES ESTIVEREM HABILITADAS ENTÃO NÃO FILTRA
      if (!filterPresential || !filterEad) {
        if (filterEad && item.course.kind.toUpperCase() !== "EAD") {
          return false;
        }

        if (
          filterPresential &&
          item.course.kind.toUpperCase() !== "PRESENCIAL"
        ) {
          return false;
        }
      }

      if (filterPrice <= item.price_with_discount) {
        return false;
      }

      return true;
    },
    selectItem(id) {
      if (this.selectedScholarships.filter(item => item === id) > 0) {
        this.selectedScholarships = this.selectedScholarships.filter(
          item => item !== id
        );
      } else {
        this.selectedScholarships = [id, ...this.selectedScholarships];
      }
    },
    addFavorites() {
      if (!this.selectedScholarships.length) return;

      this.$emit("addFavorites", [
        this.selectedScholarships,
        this.scholarships
      ]);
    }
  }
};
</script>
