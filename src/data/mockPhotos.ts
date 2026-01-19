import type { Photo } from "../types/Photo";
import beaches from "@/assets/beaches.jpg";
import library from "@/assets/library.jpeg";

export const mockPhotos: Photo[] = [
  {
    id: 1,
    title: 'Mountain View',
    url: '/shared/mountains.jpg',
    thumbnailUrl: '/shared/mountains.jpg'
  },
  {
    id: 2,
    title: 'Beach',
    url: beaches,
    thumbnailUrl: beaches
  },
  {
    id: 3,
    title: 'Library',
    url: library,
    thumbnailUrl: library
  },
  {
    id: 4,
    title: 'City Lights',
    url: 'https://picsum.photos/600/400?random=3',
    thumbnailUrl: 'https://picsum.photos/300/200?random=3'
  }
]
