<template>
  <footer class="footer">
    <div class="footer__wrapper-top">
      <div class="footer__top">
        <div class="footer__top-box footer__top-box--grow">
          <div>
            <font-awesome-icon
              :icon="['fab', 'whatsapp']"
              color="#FFF"
              size="2x"
            />
          </div>
          <div class="footer__info footer__info--grow text--s text--light">
            <p class="text--s">0800 123 2222</p>
            <p class="text--xs">Seg - Sex 8h-22h</p>
          </div>
          <div class="footer__info--wrap text--s text--light">
            <p class="text--s">0800 123 2222</p>
            <p class="text--xs">Segunda a sexta de 8h às 22h</p>
          </div>
        </div>
        <div class="footer__top-box">
          <div>
            <font-awesome-icon
              :icon="['far', 'comments']"
              color="#FFF"
              size="2x"
            />
          </div>
          <div class="footer__info text--s text--light">
            <p class="text--s">Chat ao vivo</p>
            <p class="text--xs">Seg - Sex 08h-22h</p>
          </div>
          <div class="footer__info--wrap text--s text--light">
            <p>Chat</p>
          </div>
        </div>
        <div class="footer__top-box">
          <div>
            <font-awesome-icon
              :icon="['far', 'envelope']"
              color="#FFF"
              size="2x"
            />
          </div>
          <div class="footer__info text--s text--light">
            <p class="text--s">Mande um e-mail</p>
            <p class="text--xs">Respondemos rapidinho</p>
          </div>
          <div class="footer__info--wrap text--s text--light">
            <p>E-mail</p>
          </div>
        </div>
        <div class="footer__top-box">
          <div>
            <font-awesome-icon icon="info-circle" color="#FFF" size="2x" />
          </div>
          <div class="footer__info text--s text--light">
            <p class="text--s">Central de ajuda</p>
            <p class="text--xs">Encontre todas as respostas</p>
          </div>
          <div class="footer__info--wrap text--s text--light">
            <p>Ajuda</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__wrapper-bottom">
      <div class="footer__bottom">
        <div>
          <p class="text--xs text--light">
            Feito com
            <span class="text--xs text--light">
              <font-awesome-icon
                :icon="['far', 'heart']"
                color="#FFF"
                size="lg"
              />
            </span>
            pela Quero Educação
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
@import "./_bottomSection.scss";
</style>

<script>
export default {
  name: "BottomSection"
};
</script>
