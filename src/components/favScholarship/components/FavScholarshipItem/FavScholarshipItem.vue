<template>
  <div class="scholarship">
    <div class="scholarship__university">
      <i class="scholarship__university__logo">
        <img :src="item.university.logo_url">
      </i>
      <div class="scholarship__university__description">
        <h2>{{ item.university.name}}</h2>
        <strong class="text--primary">{{ item.course.name}}</strong>
        <div class="scholarship__university__description__rating">
          <h2>3.8</h2>
          <star-rating read-only star-size="20"></star-rating>
        </div>
      </div>
    </div>
    <div class="scholarship__university__period">
      <h2>{{ item.course.kind }} - {{ item.course.shift}}</h2>
      <strong class="text--s">Inicio das aulas em: {{ item.start_date}}</strong>
    </div>
    <div class="scholarship__university__price">
      <h2>Mensalidade com o Quero Bolsa:</h2>
      <strike class="text--s">RS {{item.full_price}}</strike>
      <div class="scholarship__university__price__month">
        <strong class="text--green">RS {{item.price_with_discount}}</strong>
        <p>/mes</p>
      </div>
    </div>
    <div class="scholarship__university__options">
      <button
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
  }
};
</script>
