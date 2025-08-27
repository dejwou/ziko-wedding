<template>
    <div class="location">
        <h2 class="title">Место торжества</h2>
        <div class="location-wrapper">
            <h2 class="location-wrapper-title">Ресторан <br> "Toshkent premium"</h2>
            <p class="location-wrapper-desc">Андижанская область, город Андижан, улица А.Навои, дом 5а</p>
            <button class="location-wrapper-button" @click="openMap()">На карте</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const openMap = () => {
  const latitude = 72.368968;
  const longitude = 40.776195;
  const url = `https://yandex.ru/maps/?ll=${latitude},${longitude}&z=13`;
  window.open(url, '_blank');
}
</script>

<style lang="scss" scoped></style>