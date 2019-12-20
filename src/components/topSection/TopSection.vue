<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__left">
        <div class="header__how-it-works">
          <font-awesome-icon
            :icon="['fas', 'info-circle']"
            color="#007A8D"
            size="lg"
          />
          <p class="text text--primary text--s">Como funciona</p>
        </div>
        <div class="header__contact">
          <font-awesome-icon
            :icon="['fab', 'whatsapp']"
            color="#25d366"
            size="lg"
          />
          <div class="header__number">
            <span class="text text--primary text--s">0800 123 2222</span>
            <span class="text text--primary text--xs"
              >Envie mensagem ou ligue</span
            >
          </div>
        </div>
      </div>
      <div class="header__logo">
        <img
          src="@/assets/quero_bolsa.svg"
          class="header__img"
          alt="Quero Bolsa"
        />
      </div>
      <div class="header__account">
        <p class="text text--primary text--s">Nome Sobrenome</p>
        <font-awesome-icon
          :icon="['far', 'user-circle']"
          color="#007a8d"
          size="lg"
        />
      </div>
    </div>
    <div class="header__nav-wrapper">
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item">
            <a class="header__page header__page--fixed text--s" href
              >Minha Conta</a
            >
          </li>
          <li class="header__item">
            <a class="header__page text--s" href>Pré-matriculas</a>
          </li>
          <li class="header__item header__item--active">
            <a class="header__page text--s" href>Bolsas favoritas</a>
          </li>
          <li class="header__item header__item--mobile">
            <a class="header__page text--s" href>Menu</a>
            <font-awesome-icon
              :icon="['fas', 'chevron-down']"
              color="#FFF"
              size="s"
            />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "./_topSection.scss";
</style>

<script>
export default {
  name: "TopSection"
};
</script>
