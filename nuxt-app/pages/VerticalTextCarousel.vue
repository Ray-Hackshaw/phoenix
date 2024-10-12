<template>
  <transition name="slide-fade" mode="out-in">
    <div :key="currentIndex">
      <p class="uppercase">
        {{ items[currentIndex] }}
      </p>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const items = [
  "React/Nextjs",
  "Vue, Svelte",
  "Tailwind CSS",
  "tRPC",
  "Prisma, Drizzle",
  "MySQL, GraphQL",
  "Vercel, Amplify",
  "AWS Lambda",
  "Webflow",
  "Wordpress",
];

const currentIndex = ref(0);
let intervalId = null;

const rotateCarousel = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length;
};

onMounted(() => {
  intervalId = setInterval(rotateCarousel, 2500); // Rotate every 2.5 seconds
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  transform: translateY(10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
