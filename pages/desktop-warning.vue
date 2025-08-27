<template>
  <div class="warning">
    <div class="warning-tracery">
        <img src="../assets/images/traceries/tracery-top.svg" alt="">
    </div>
    <div class="warning-info">
        <h1 class="warning-info-title">Дорогой гость</h1>
        <p class="warning-info-text">Пожалуйста, откройте сайт с мобильного устройства</p>
    </div>
    <div class="warning-tracery top">
        <img src="../assets/images/traceries/tracery-bottom.svg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.warning{
    width: 100%;
    height: 100vh;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-info{
        text-align: center;
        margin: 6rem;
        
        &-title{
            color: #414141;
        }

        &-text{
            color: #414141;
        }
    }
}
</style>