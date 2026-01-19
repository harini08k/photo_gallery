<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PhotoCard from '@/components/PhotoCard.vue'
import PhotoModal from '@/components/PhotoModal.vue'
import type { Photo } from '@/types/Photo'
import { mockPhotos } from '@/data/mockPhotos'

const photos = ref<Photo[]>([])
const selectedPhoto = ref<Photo | null>(null)

onMounted(() => {
  // Simulating API call
  photos.value = mockPhotos
})
</script>

<template>
  <h1>Photo Gallery</h1>

  <div class="grid">
    <PhotoCard
      v-for="photo in photos"
      :key="photo.id"
      :photo="photo"
      @open="selectedPhoto = $event"
    />
  </div>

  <PhotoModal
    :photo="selectedPhoto"
    @close="selectedPhoto = null"
  />
</template>

<style scoped>
.grid {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 6px;
}

.grid::-webkit-scrollbar {
  height: 8px;
}

.grid::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

h1 {
  margin-bottom: 16px;
}
</style>
