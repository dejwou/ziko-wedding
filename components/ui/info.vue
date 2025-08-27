<template>
  <div class="text-content">
    <div class="text-content-tracery">
        <img :src="tracery" alt="">
    </div>
    <h2 class="text-content-title">{{ title }}</h2>
    <p v-for="(paragraph, index) in paragraphs" :key="index" class="text-content-paragraph">
      {{ paragraph }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  paragraphs: {
    type: Array,
    required: true
  },
  tracery:{
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss"></style>