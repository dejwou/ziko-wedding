<template>
  <div class="background-music" v-if="showControl">
    <audio ref="audio" loop>
      <source :src="audioSource" type="audio/mp3" />
      Ваш браузер не поддерживает элемент audio.
    </audio>
    <button 
      @click="toggleMusic" 
      class="music-control"
      :class="{ 'playing': isPlaying }"
      title="Toggle background music"
    >
      <span v-if="isPlaying">🔊</span>
      <span v-else>🔇</span>
    </button>
  </div>
  <audio ref="audio" loop v-else>
    <source :src="audioSource" type="audio/mp3" />
    Ваш браузер не поддерживает элемент audio.
  </audio>
</template>

<script lang="ts" setup>
const audio = ref<HTMLAudioElement | null>(null)
const audioSource = '/morunas.mp3'
const isPlaying = ref(false)
const showControl = ref(true)

const toggleMusic = () => {
  if (audio.value) {
    if (isPlaying.value) {
      audio.value.pause()
      isPlaying.value = false
    } else {
      audio.value.play()
      isPlaying.value = true
    }
  }
}

onMounted(() => {
  if (audio.value) {
    audio.value.volume = 0.5;
    
    // Try to play automatically
    const playPromise = audio.value.play()
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isPlaying.value = true
          // Hide the control after 3 seconds if music starts playing
          setTimeout(() => {
            showControl.value = false
          }, 3000)
        })
        .catch(() => {
          // Audio couldn't play automatically, keep control visible
          isPlaying.value = false
        })
    }
  }
})
</script>

<style scoped>
.background-music {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.music-control {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #414141;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.music-control:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

.music-control.playing {
  background: rgba(65, 65, 65, 0.9);
  color: white;
}

.music-control.playing:hover {
  background: rgba(65, 65, 65, 1);
}
</style>