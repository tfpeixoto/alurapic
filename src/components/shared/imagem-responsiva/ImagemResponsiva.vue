<template>
  <img class="imagem-responsiva" :src="url" :alt="titulo" />
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.imagem-responsiva {
  width: 100%;
}
</style>
