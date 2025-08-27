<template>
  <audio ref="audio" autoplay loop>
    <source :src="audioSource" type="audio/mp3" />
    Ваш браузер не поддерживает элемент audio.
  </audio>
</template>

<script lang="ts" setup>
import backgroundAudio from '~/assets/audio/bgmusic.mp3'

const audio = ref<HTMLAudioElement | null>(null)
const audioSource = backgroundAudio

onMounted(() => {
  if (audio.value) {
    audio.value.volume = 0.5;
    audio.value.play()
  }
})
</script>