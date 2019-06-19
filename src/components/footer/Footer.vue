<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__top__box footer__top__box--grow">
        <div class="footer__top__box__icon">
          <font-awesome-icon icon="comment" color="#FFF" size="2x"/>
        </div>
        <div class="footer__top__box__info footer__top__box__info--grow text--s text--light">
          <span class="text--s">0800 123 2222</span>
          <span class="text--s">Segunda a sexta de 8h às 22h</span>
        </div>
      </div>
      <div class="footer__top__box">
        <div class="footer__top__box__icon">
          <font-awesome-icon icon="comments" color="#FFF" size="2x"/>
        </div>
        <div class="footer__top__box__info text--s text--light">
          <p class="text--s">Chat ao vivo</p>
          <p class="text--s">Seg-Sex 08h-22h</p>
        </div>
        <span class="footer__top__box__info--wrap text--s text--light">Chat</span>
      </div>
      <div class="footer__top__box">
        <div class="footer__top__box__icon">
          <font-awesome-icon icon="envelope" color="#FFF" size="2x"/>
        </div>
        <div class="footer__top__box__info text--s text--light">
          <p class="text--s">Mande um e-mail</p>
          <p class="text--s">Respondemos rapidinho</p>
        </div>
        <span class="footer__top__box__info--wrap text--s text--light">E-mail</span>
      </div>
      <div class="footer__top__box">
        <div class="footer__top__box__icon">
          <font-awesome-icon icon="info-circle" color="#FFF" size="2x"/>
        </div>
        <div class="footer__top__box__info text--s text--light">
          <p class="text--s">Central de ajuda</p>
          <p class="text--s">Encontre todas as respostas</p>
        </div>
        <span class="footer__top__box__info--wrap text--s text--light">Ajuda</span>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom__box">
        <p class="text--xs text--light">
          Feito com
          <span class="text--xs text--light">
            <font-awesome-icon icon="heart" color="#FFF" size="1x"/>
          </span> pela Quero Educação
        </p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import "./_footer.scss";
</style>

<script>
export default {
  name: "footer"
};
</script>