<script setup>
import { useHead } from "#imports";

useHead({
  title: "Ray Hackshaw",
  script: [
    {
      src: "https://app.denki.co.nz/script.js",
      "data-website-id": "a9f957ff-3d8a-4175-b581-f6308e171a19",
    },
  ],
});

function goToGithub() {
  window.open("https://github.com/Ray-Hackshaw");
}
</script>
<template>
  <main
    class="flex flex-col relative justify-center items-center min-w-[100vw] min-h-[100vh] maincard"
  >
    <div class="max-w-7xl w-full flex items-center rounded-md z-[10]">
      <div class="max-w-5xl w-full mx-auto min-h-[30vh] text-[#131313]">
        <div class="p-4 mt-2 w-full max-w-3xl mx-auto text-center space-y-2">
          <div
            class="rounded-full w-fit overflow-hidden flex mx-auto -mt-32 relative cursor-pointer"
            @click="goToGithub"
          >
            <NuxtImg
              src="/avi2.jfif"
              format="jfif"
              alt="Avatar image of Ray Hackshaw"
              width="200"
              height="200"
            />
          </div>

          <h1 class="font-bold tracking-wider text-2xl md:text-3xl">
            Ray Hackshaw
          </h1>
          <div class="leading-tight">
            <h2 class="opacity-70">Auckland, New Zealand</h2>
            <p class="opacity-90">Web Developer</p>
          </div>
        </div>
      </div>
    </div>
    <footer
      class="bg-opacity-80 p-4 w-full flex gap-2 absolute bottom-0 text-[#131313] text-md md:text-lg lg:text-xl"
    >
      <ul class="text-center grid grid-cols-2 md:flex gap-4 md:gap-8 mx-auto">
        <li class="underline">
          <NuxtLink to="https://github.com/Ray-Hackshaw">Github</NuxtLink>
        </li>
        <li class="underline">
          <NuxtLink to="https://www.linkedin.com/in/rayhackshaw/"
            >LinkedIn</NuxtLink
          >
        </li>
        <li class="col-span-2">ray@rayhackshaw.com</li>
        <li class="col-span-2">+642102328715</li>
      </ul>
    </footer>
  </main>
</template>
