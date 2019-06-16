<template>
  <div>
    <div>
      <h2>Bolsas Favoritas</h2>
      <p>Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis</p>
    </div>
    <div>
      <div>
        <p>Todos os semetres</p>
      </div>
      <div>
        <p>2º semetre de 2019</p>
      </div>
      <div>
        <p>1º semetre de 2019</p>
      </div>
    </div>
    <div>
      <div>
        <div>
          <i>+</i>
        </div>
        <div>
          <h2>Adicionar bolsa</h2>
          <p>Clique para adicionar bolsas de cursos do seu interesse</p>
        </div>
      </div>
      <FavScholarshipItem/>
    </div>
  </div>
</template>


<script>
import FavScholarshipItem from "./components/FavScholarshipItem/FavScholarshipItem.vue";

export default {
  name: "favScholarship",
  components: {
    FavScholarshipItem
  }
};
</script>
