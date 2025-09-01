<template>
  <div class="marquee-wrapper">
    <div class="marquee">
      <div class="track">
        <p v-for="i in 16" :key="i">
          <span v-html="heart"></span>X DAY 29.09.2025
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import heart from "@/assets/icons/x-day.svg?raw";
</script>

<style lang="scss" scoped></style>
  