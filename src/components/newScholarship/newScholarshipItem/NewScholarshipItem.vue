<template>
  <div class="university__container">
    <div class="university">
      <div class="university__item">
        <input class="checkbox" type="checkbox">
      </div>
      <div class="university__item">
        <img src="https://www.univap.br/imagens/favicon/favicon-32x32.png">
      </div>
      <div class="university__item university__item--block">
        <div class="item__course">
          <p class="text text--s text--secondary">Administração</p>
          <p class="text text--xs">Bacharelado</p>
        </div>
        <div class="item__price">
          <p class="text text--s">
            Bolsa de
            <span class="text text--s text--green text--bold">50%</span>
          </p>
          <p class="text text--s text--green text--bold">R$ 374/mês</p>
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
  name: "newScholarshipItem"
};
</script>
