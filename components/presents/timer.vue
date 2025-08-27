<template>
    <div class="timer">
        <h6>До свадьбы осталось</h6>
        <div class="timer-countdown">
          <div class="timer-box">
            <span class="timer-box-number">{{ countdown.days }}</span>
            <span class="timer-box-label">Дней</span>
          </div>
          <span>:</span>
          <div class="timer-box">
            <span class="timer-box-number">{{ countdown.hours }}</span>
            <span class="timer-box-label">Часов</span>
          </div>
          <span>:</span>
          <div class="timer-box">
            <span class="timer-box-number">{{ countdown.minutes }}</span>
            <span class="timer-box-label">Минут</span>
          </div>
          <span>:</span>
          <div class="timer-box">
            <span class="timer-box-number">{{ countdown.seconds }}</span>
            <span class="timer-box-label">Секунд</span>
          </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import Countdown from "~/composables/countdown";

const countdown = new Countdown(new Date("2025-09-20T18:00:00"));
</script>

<style lang="scss" scoped></style>