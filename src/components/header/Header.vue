<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__left">
        <div class="header__left__how-it-works">
          <font-awesome-icon
            :icon="['fas', 'info-circle']"
            color="#007A8D"
            size="lg"
          />
          <p class="text text--primary text--s">Como funciona</p>
        </div>
        <div class="header__left__contact">
          <font-awesome-icon
            :icon="['fab', 'whatsapp']"
            color="#25d366"
            size="lg"
          />
          <div class="header__left__contact__number">
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
          class="header__logo__img"
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
    <div class="nav__wrapper">
      <nav class="header__nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a class="nav__item__page nav__item__page--fixed text--s" href
              >Minha Conta</a
            >
          </li>
          <li class="nav__item">
            <a class="nav__item__page text--s" href>Pré-matriculas</a>
          </li>
          <li class="nav__item nav__item--active">
            <a class="nav__item__page nav__item__page text--s" href
              >Bolsas favoritas</a
            >
          </li>
          <li class="nav__item nav__item--mobile">
            <a class="nav__item__page text--s" href>Menu</a>
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
@import "./_header.scss";
</style>

<script>
export default {
  name: "header"
};
</script>
