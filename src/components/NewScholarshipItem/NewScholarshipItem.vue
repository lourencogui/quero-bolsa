<template>
  <div class="university__container">
    <div class="university">
      <div class="university__item" v-on:click="selectItem(item.id)">
        <input class="checkbox" type="checkbox" />
      </div>
      <div class="university__item university__logo">
        <img :src="item.university.logo_url" />
      </div>
      <div class="university__item university__info">
        <div class="university__course">
          <p class="text text--s text--secondary">{{ item.course.name }}</p>
          <p class="text text--xs">{{ item.course.level }}</p>
        </div>
        <div>
          <p class="text text--s">
            Bolsa de
            <span class="text text--s text--green text--bold"
              >{{ item.discount_percentage }}%</span
            >
          </p>
          <p class="text text--s text--green text--bold">
            R$ {{ item.price_with_discount }}/mês
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "./_newScholarshipItem.scss";
</style>

<script>
export default {
  name: "newScholarshipItem",
  props: {
    item: Object
  },
  methods: {
    selectItem(id) {
      this.$emit("selectItem", id);
    }
  }
};
</script>
