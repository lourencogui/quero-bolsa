<template>
  <div>
    <div>
      <h1>Adicionar bolsa</h1>
      <p>Filtre e adicione as bolsas de seu interesse.</p>
    </div>
    <!-- FILTROS -->
    <div>
      <!-- SELECTS -->
      <div>
        <div>
          <p>SELECIONE SUA CIDADE</p>
          <select>
            <option>São josé dos Campos</option>
          </select>
        </div>
        <div>
          <p>SELECIONE O CURSO DE SUA PREFERÊNCIA</p>
          <select>
            <option>Engenharia da computação</option>
          </select>
        </div>
      </div>
      <!-- CHKS E SLIDER -->
      <div>
        <div>
          <p>COMO VOCÊ QUER ESTUDAR?</p>
          <div>
            <input type="check">
            <input type="check">
          </div>
        </div>

        <div>
          <div>
            <p>ATÉ QUANTO PODE PAGAR?</p>
            <p>R$ 10.000</p>
          </div>
          <div>
            <input type="checkbox">
            <input type="range">
          </div>
        </div>
      </div>
    </div>
    <!-- ORDER BY -->
    <div>
      <div>
        <p>Resultado:</p>
      </div>
      <div>
        <p>Ordenar por:</p>
        <select>
          <option>NOME DA FACULDADE</option>
        </select>
      </div>
    </div>
    <!-- SCHOLARSHIPS -->
    <div>
      <NewScholarshipItem/>
    </div>
    <!-- FOOTER -->
    <div>
      <button name="cancel">Cancelar</button>
      <button name="add">Adicionar bolsa(s)</button>
    </div>
  </div>
</template>


<script>
import { NewScholarshipItem } from "./newScholarshipItem/NewScholarshipItem.vue";
export default {
  name: "newScholarship",
  components: {
    NewScholarshipItem
  }
};
</script>
