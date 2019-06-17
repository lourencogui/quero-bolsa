<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__top__box footer__top__box--grow">
        <div class="footer__top__box__icon">
          <font-awesome-icon icon="comment" color="#FFF" size="2x"/>
        </div>
        <div class="footer__top__box__info footer__top__box__info--grow text--s text--light">
          <span>0800 123 2222</span>
          <span>Segunda a sexta de 8h às 22h</span>
        </div>
      </div>
      <div class="footer__top__box">
        <div class="footer__top__box__icon">
          <font-awesome-icon icon="comments" color="#FFF" size="2x"/>
        </div>
        <div class="footer__top__box__info text--s text--light">
          <p>Chat ao vivo</p>
          <p>Seg-Sex 08h-22h</p>
        </div>
        <span class="footer__top__box__info--wrap text--s text--light">Chat</span>
      </div>
      <div class="footer__top__box">
        <div class="footer__top__box__icon">
          <font-awesome-icon icon="envelope" color="#FFF" size="2x"/>
        </div>
        <div class="footer__top__box__info text--s text--light">
          <p>Mande um e-mail</p>
          <p>Respondemos rapidinho</p>
        </div>
        <span class="footer__top__box__info--wrap text--s text--light">E-mail</span>
      </div>
      <div class="footer__top__box">
        <div class="footer__top__box__icon">
          <font-awesome-icon icon="info-circle" color="#FFF" size="2x"/>
        </div>
        <div class="footer__top__box__info text--s text--light">
          <p>Central de ajuda</p>
          <p>Encontre todas as respostas</p>
        </div>
        <span class="footer__top__box__info--wrap text--s text--light">Ajuda</span>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom__box">
        <p class="text--xs text--light">
          Feito com
          <span>
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