<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__top__box footer__top__box--grow">
        <div class="footer__top__box__icon">
          <font-awesome-icon icon="comment" color="#FFF" size="2x"/>
        </div>
        <div class="footer__top__box__info footer__top__box__info--grow">
          <p>0800 123 2222</p>
          <p>Segunda a sexta de 8h às 22h</p>
        </div>
      </div>
      <div class="footer__top__box">
        <div class="footer__top__box__icon">
          <font-awesome-icon icon="comments" color="#FFF" size="2x"/>
        </div>
        <!-- <div class="footer__top__box__info">
          <p>Chat ao vivo</p>
          <p>Seg-Sex 08h-22h</p>
        </div> -->
      </div>
      <div class="footer__top__box">
        <div class="footer__top__box__icon">
          <font-awesome-icon icon="envelope" color="#FFF" size="2x"/>
        </div>
        <!-- <div class="footer__top__box__info">
          <p>Mande um e-mail</p>
          <p>Respondemos rapidinho</p>
        </div> -->
      </div>
      <div class="footer__top__box">
        <div class="footer__top__box__icon">
          <font-awesome-icon icon="info-circle" color="#FFF" size="2x"/>
        </div>
        <!-- <div class="footer__top__box__info">
          <i>Central de ajuda</i>
          <p>Encontre todas as respostas</p>
        </div> -->
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom__box">
        <p>
          Feito com
          <span>
            <font-awesome-icon icon="heart" color="#FFF" size="2x"/>
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