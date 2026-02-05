<script lang="ts">
import type { Product } from './Product';
  export default {
    props: {
      product: Object as PropType<Product>
    },
  }
</script>

<template>
  <p>Nombre: {{ product.name }}</p> 
  <p>Precio: {{ product.price }}</p>
  <hr/>
</template>