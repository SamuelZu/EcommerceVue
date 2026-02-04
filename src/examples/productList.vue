<script lang="ts">
export default {
  data() {
    return {
      products: [
        {name: 'Silla', price: 56},
        {name: 'Monitor', price: 400},
        {name: 'Micófono', price: 150}
      ]
      
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="product in products">
      {{ product.name }} (${{ product.price }})</li>
  </ul>
</template>
