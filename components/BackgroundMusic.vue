<template>
  <div class="background-music">
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
</template>

<script lang="ts" setup>
const audio = ref<HTMLAudioElement | null>(null)
const audioSource = '/morunas.mp3'
const isPlaying = ref(false)
const manuallyStopped = ref(false)

const toggleMusic = () => {
  if (audio.value) {
    if (isPlaying.value) {
      audio.value.pause()
      isPlaying.value = false
      manuallyStopped.value = true
    } else {
      audio.value.play()
      isPlaying.value = true
      manuallyStopped.value = false
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
        })
        .catch(() => {
          // Audio couldn't play automatically, keep control visible
          isPlaying.value = false
          console.log('Autoplay blocked by browser. User needs to interact first.')
        })
    }
  }
})

// Listen for user interaction to enable autoplay
onMounted(() => {
  let listenersRemoved = false
  
  const enableAudio = (eventType: string) => {
    console.log(`Interaction detected: ${eventType}`, { 
      isPlaying: isPlaying.value, 
      manuallyStopped: manuallyStopped.value, 
      listenersRemoved 
    })
    
    if (audio.value && !isPlaying.value && !manuallyStopped.value && !listenersRemoved) {
      console.log('Attempting to play audio...')
      audio.value.play().then(() => {
        console.log('Audio started successfully!')
        isPlaying.value = true
        
        // Remove event listeners after successful play
        if (!listenersRemoved) {
          listenersRemoved = true
          document.removeEventListener('click', () => enableAudio('click'))
          document.removeEventListener('touchstart', () => enableAudio('touch'))
          document.removeEventListener('keydown', () => enableAudio('keyboard'))
          document.removeEventListener('scroll', () => enableAudio('scroll'))
          console.log('Event listeners removed')
        }
      }).catch(err => {
        console.log('Still cannot play audio:', err)
      })
    }
  }
  
  // Add event listeners for user interaction
  document.addEventListener('click', () => enableAudio('click'))
  document.addEventListener('touchstart', () => enableAudio('touch'))
  document.addEventListener('keydown', () => enableAudio('keyboard'))
  document.addEventListener('scroll', () => enableAudio('scroll'))
  
  console.log('Event listeners added for: click, touch, keyboard, scroll')
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