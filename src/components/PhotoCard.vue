<script setup lang="ts">
import type { Photo } from '@/types/Photo'

defineProps<{
  photo: Photo
}>()

defineEmits<{
  (e: 'open', photo: Photo): void
}>()
</script>

<template>
  <div class="card" @click="$emit('open', photo)">
    <img :src="photo.thumbnailUrl" :alt="photo.title" />
    <p>{{ photo.title }}</p>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  min-width: 160px;
  max-width: 160px;


}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 18px rgba(0,0,0,0.2);
}
.card img {
  width: 100%;
  display: block;
}
.card p {
  padding: 8px;
  font-size: 14px;
}
</style>
