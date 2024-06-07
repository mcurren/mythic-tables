<script setup>
import RandomPage from '@/components/RandomPage.vue'
</script>

<template>
  <section id="dice" class="dice-rolls">
    <h2 class="page-title">Random Page</h2>
    <div class="dice-rolls__content">
      <RandomPage />
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
}
</style>
