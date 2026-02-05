<script lang="ts">
import ProductCard from './ProductCard.vue'

export default {
  components: {
    ProductCard
  },
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
  <ProductCard 
    v-for="p in products" 
    :product="p"/>
</template>
