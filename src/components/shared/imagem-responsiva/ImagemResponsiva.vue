<template>
  <img class="imagem-responsiva" :src="url" :alt="titulo" />
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
    },
    url: {
      type: String,
    }
  }
};
</script>

<style scoped>
.imagem-responsiva {
  width: 100%;
}
</style>
