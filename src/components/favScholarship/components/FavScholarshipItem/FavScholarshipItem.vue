<template>
  <div class="scholarship">
    <div class="scholarship__university">
      <i class="scholarship__logo">
        <img class="scholarship__logo-img" :src="item.university.logo_url" />
      </i>
      <div class="scholarship__description">
        <h2 class="text--m">{{ item.university.name }}</h2>
        <strong class="text--primary text--s">{{ item.course.name }}</strong>
        <div class="scholarship__rating">
          <p class="text text--s">{{ item.university.score }}</p>
          <star-rating
            read-only
            :star-size="17"
            :show-rating="false"
            :rating="item.university.score"
          ></star-rating>
        </div>
      </div>
    </div>

    <div class="scholarship__period">
      <h2 class="text--m">{{ item.course.kind }} - {{ item.course.shift }}</h2>
      <strong class="text--xs"
        >Inicio das aulas em: {{ item.start_date }}</strong
      >
    </div>

    <div class="scholarship__price-full">
      <h2 class="text--s">Mensalidade com o Quero Bolsa:</h2>
      <strike class="text--s">RS {{ item.full_price }}</strike>
      <div class="scholarship__price-month">
        <strong class="text--green text--m"
          >RS {{ item.price_with_discount }}</strong
        >
        <p class="text--s">/mes</p>
      </div>
    </div>

    <div class="scholarship__options">
      <button
        @click="removeFavorite(item.id)"
        class="scholarship__button scholarship__button--outline"
        name="button"
      >
        Excluir
      </button>
      <button
        key="scholarship-details"
        v-if="item.enabled"
        class="scholarship__button scholarship__button--yellow"
        name="button"
      >
        Ver oferta
      </button>
      <button
        key="scholarship-details"
        v-else
        class="scholarship__button scholarship__button--disabled"
        name="button"
        disabled
      >
        Indisponível
      </button>
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
