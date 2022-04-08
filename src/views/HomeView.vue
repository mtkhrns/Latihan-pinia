<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

const counterStore = useCounterStore ()

console.log(counterStore.counter)
console.log(counterStore.doubleCount)

counterStore.increment
</script>

<template>
  <main class= "container mt-5"> 
    <h1>Counter</h1>
    <h2>Count: {{ counterStore.counter}}</h2>

   <button class ="btn btn-primary" @click="counterStore.increment">Increment</button>
  </main>
</template>
