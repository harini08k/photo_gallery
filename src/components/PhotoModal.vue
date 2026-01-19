<script setup lang="ts">
import type { Photo } from '@/types/Photo'

defineProps<{
  photo: Photo | null
}>()

defineEmits(['close'])
</script>

<template>
  <div v-if="photo" class="overlay" @click.self="$emit('close')">
    <div class="modal">
      <img :src="photo.url" />
      <h3>{{ photo.title }}</h3>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: white;
  padding: 16px;
  border-radius: 10px;
  max-width: 700px;
  width: 90%;
}
.modal img {
  width: 100%;
  border-radius: 6px;
}
button {
  margin-top: 10px;
}
</style>
