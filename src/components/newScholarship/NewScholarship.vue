<template>
  <div class="container">
    <div class="modal">
      <div class="title">
        <h2>Adicionar bolsa</h2>
        <p class="text--s">Filtre e adicione as bolsas de seu interesse.</p>
      </div>
      <div class="filter">
        <div class="filter__top">
          <div class="filter__top__item">
            <label class="text--s">SELECIONE SUA CIDADE</label>
            <select class="select">
              <option>São José dos Campos</option>
            </select>
          </div>
          <div class="filter__top__item">
            <label class="text--s">SELECIONE O CURSO DE SUA PREFERÊNCIA</label>
            <select class="select">
              <option>Engenharia da computação</option>
            </select>
          </div>
        </div>
        <div class="filter__bottom">
          <div class="filter__bottom__type">
            <div>
              <label class="text--s">COMO VOCÊ QUER ESTUDAR?</label>
            </div>
            <div class="filter__bottom__type__options">
              <div class="filter__bottom__type__options__checkbox">
                <input
                  class="filter__checkbox--input checkbox"
                  type="checkbox"
                  value="Presencial"
                  id="chk-presential"
                  v-model="filterPresential"
                  v-on:change="changeFilter('filterPresential', filterPresential)"
                >
                <label class="filter__checkbox--label" for="chk-presential">Presencial</label>
              </div>
              <div class="filter__bottom__type__options__checkbox">
                <input
                  class="filter__checkbox--input"
                  type="checkbox"
                  value="A distância"
                  id="chk-ead"
                  v-model="filterPresential"
                  v-on:change="changeFilter('filterPresential', filterPresential)"
                >
                <label class="filter__checkbox--label" for="chk-ead">A distância</label>
              </div>
            </div>
          </div>
          <div class="filter__bottom__price">
            <div class="filter__bottom__price__options">
              <p class="text--s">ATÉ QUANTO PODE PAGAR?</p>
              <p class="text--s">R$ 10.000</p>
            </div>
            <div>
              <VueSlider :dotSize="25"/>
            </div>
          </div>
        </div>
      </div>
      <div class="sort">
        <div class="sort__right">
          <p>Resultado:</p>
        </div>
        <div class="sort__left">
          <p>Ordenar por:</p>
          <select class="select select--text">
            <option>NOME DA FACULDADE</option>
          </select>
        </div>
      </div>
      <div class="results">
        <NewScholarshipItem/>
        <NewScholarshipItem/>
        <!-- <NewScholarshipItem/> -->
      </div>
      <div class="buttons">
        <button class="buttons__item buttons__item--outline" name="cancel">Cancelar</button>
        <button class="buttons__item buttons__item--yellow" name="add">Adicionar bolsa(s)</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./_newScholarship.scss";
</style>



<script>
import NewScholarshipItem from "./newScholarshipItem/NewScholarshipItem.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
export default {
  name: "newScholarship",
  components: {
    NewScholarshipItem,
    VueSlider
  }
};
</script>
