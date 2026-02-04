<script lang="ts">
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increase() {
      this.count += 1;
    }
  },
  mounted() {
    console.log('El valor del contador es de ' + this.count);
  }
}
</script>

<template>
  <p>Llega a 20 clics</p>


  <h1>Contador: {{ count }}</h1>
  <button @click="increase">Aumentar contador</button>


  <p v-if="count <= 10">Vamos</p>
 <!-- <p v-else>Ya falta poco...</p> -->
</template>
