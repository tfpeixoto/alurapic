<template>
  <button @click="disparaAcao()" class="botao" :class="estiloDoBotao">
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
    tipo: {
      type: String,
      required: true
    },
    rotulo: {
      type: String,
      required: true
    },
    confirmacao: Boolean,
    estilo: String
  },

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operação?")) {
          this.$emit("botaoAtivado", new Date());
        }
        return
      }
      this.$emit('botaoAtivado')
    }
  },

  computed: {
    estiloDoBotao() {
      if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao';
      if(this.estilo == 'perigo') return 'botao-perigo';
    }
  }
};
</script>

<style>
.botao {
  display: inline-block;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: 10px;
  font-size: 1.2em;
}
.botao-perigo {
  background: #f00;
  color: #fff;
}
.botao-padrao {
  background: darkcyan;
  color: #fff;
}
</style>
