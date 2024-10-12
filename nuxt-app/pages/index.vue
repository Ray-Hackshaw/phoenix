<script setup>
import { useHead } from "#imports";
import "../assets/css/main.css";
import VerticalTextCarousel from "./VerticalTextCarousel.vue";

// Head configuration
useHead({
  title: "Ray Hackshaw",
  script: [
    {
      src: "https://app.denki.co.nz/script.js",
      "data-website-id": "a9f957ff-3d8a-4175-b581-f6308e171a19",
    },
  ],
});
</script>
<template>
  <main
    class="flex flex-col relative justify-center items-center bg-[#252525] min-w-[100vw] min-h-[100vh]"
  >
    <div
      class="max-w-7xl w-full flex items-center rounded-md z-[10] text-white"
    >
      <div
        class="max-w-5xl w-full mx-auto min-h-[30vh] p-4 rounded-md relative"
      >
        <div className="flex flex-col md:flex-row md:gap-4 w-full relative">
          <div className="text-white">
            <h1 class="tracking-tight font-bold uppercase text-4xl md:text-6xl">
              Ray Hackshaw
            </h1>
          </div>
          <div className="indent-2 leading-tight uppercase md:pb-0 pb-4">
            <h2 className="text-base md:text-xl">Full-stack Developer</h2>
            <p className="text-xs md:text-sm">Auckland, NZ</p>
            <div className="text-white w-full py-1">
              <VerticalTextCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 py-4 flex gap-1">
      <p className="text-white">Analytics powered by</p>
      <NuxtLink to="https://denki.co.nz/" className="underline text-white"
        >Denki</NuxtLink
      >
    </div>
  </main>
</template>
