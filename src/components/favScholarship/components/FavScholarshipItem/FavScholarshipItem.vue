<template>
  <div class="scholarship">
    <div class="scholarship__university">
      <i class="scholarship__university__logo">
        <img class="scholarship__university__logo--img" :src="item.university.logo_url">
      </i>
      <div class="scholarship__university__description">
        <h2 class="text--m">{{ item.university.name}}</h2>
        <strong class="text--primary text--s">{{ item.course.name}}</strong>
        <div class="scholarship__university__description__rating">
          <p class="text text--s">{{item.university.score}}</p>
          <star-rating
            read-only
            :star-size="17"
            :show-rating="false"
            :rating="item.university.score"
          ></star-rating>
        </div>
      </div>
    </div>
    <div class="scholarship__university__period">
      <h2 class="text--m">{{ item.course.kind }} - {{ item.course.shift}}</h2>
      <strong class="text--s">Inicio das aulas em: {{ item.start_date}}</strong>
    </div>
    <div class="scholarship__university__price">
      <h2 class="text--m">Mensalidade com o Quero Bolsa:</h2>
      <strike class="text--s">RS {{item.full_price}}</strike>
      <div class="scholarship__university__price__month">
        <strong class="text--green text--m">RS {{item.price_with_discount}}</strong>
        <p>/mes</p>
      </div>
    </div>
    <div class="scholarship__university__options">
      <button
        @click="removeFavorite(item.id)"
        class="scholarship__university__options__button scholarship__university__options__button--outline"
        name="button"
      >Excluir</button>
      <button
        v-if="item.enabled"
        class="scholarship__university__options__button scholarship__university__options__button--yellow"
        name="button"
      >Ver oferta</button>
      <button
        v-else
        class="scholarship__university__options__button scholarship__university__options__button--disabled"
        name="button"
        disabled
      >Indisponível</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./_favScholarshipItem.scss";
</style>


<script>
import StarRating from "vue-star-rating";

export default {
  name: "FavScholarshipItem",
  components: {
    StarRating
  },
  props: {
    item: Object
  },
  methods: {
    removeFavorite(id) {
      this.$emit("removeFavorite", id);
    }
  }
};
</script>
