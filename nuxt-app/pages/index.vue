<script setup>
useHead({
  title: "Ray Hackshaw",
});
</script>

<!-- todo: convert to typescript -->
<script>
export default {
  mounted() {
    this.followingDotCursor();
  },
  methods: {
    goToGithub() {
      window.open("https://github.com/Ray-Hackshaw");
    },
    followingDotCursor(options) {
      // full credit to @tholman: https://github.com/tholman
      let hasWrapperEl = options && options.element;
      let element = hasWrapperEl || document.body;

      let width = window.innerWidth;
      let height = window.innerHeight;
      let cursor = { x: width / 2, y: width / 2 };
      let dot = new Dot(width / 2, height / 2, 10, 5, "#ff4760");
      let dot2 = new Dot(width / 2, height / 2, 10, 10, "#E5F8F4");
      let canvas, context, animationFrame;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

      // Re-initialise or destroy the cursor when the prefers-reduced-motion setting changes
      prefersReducedMotion.onchange = () => {
        if (prefersReducedMotion.matches) {
          destroy();
        } else {
          init();
        }
      };

      function init() {
        // Don't show the cursor trail if the user has prefers-reduced-motion enabled
        if (prefersReducedMotion.matches) {
          console.log(
            "This browser has prefers reduced motion turned on, so the cursor did not init"
          );
          return false;
        }

        canvas = document.createElement("canvas");
        context = canvas.getContext("2d");
        canvas.style.top = "0px";
        canvas.style.left = "0px";
        canvas.style.pointerEvents = "none";

        if (hasWrapperEl) {
          canvas.style.position = "absolute";
          element.appendChild(canvas);
          canvas.width = element.clientWidth;
          canvas.height = element.clientHeight;
        } else {
          canvas.style.position = "fixed";
          document.body.appendChild(canvas);
          canvas.width = width;
          canvas.height = height;
        }

        bindEvents();
        loop();
      }

      // Bind events that are needed
      function bindEvents() {
        element.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onWindowResize);
      }

      function onWindowResize(e) {
        width = window.innerWidth;
        height = window.innerHeight;

        if (hasWrapperEl) {
          canvas.width = element.clientWidth;
          canvas.height = element.clientHeight;
        } else {
          canvas.width = width;
          canvas.height = height;
        }
      }

      function onMouseMove(e) {
        if (hasWrapperEl) {
          const boundingRect = element.getBoundingClientRect();
          cursor.x = e.clientX - boundingRect.left;
          cursor.y = e.clientY - boundingRect.top;
        } else {
          cursor.x = e.clientX;
          cursor.y = e.clientY;
        }
      }

      function updateDot() {
        const modifier = Math.floor(Math.random() * 10) + 1;
        context.clearRect(0, 0, width, height);
        dot.moveTowards(cursor.x, cursor.y, context);
        dot2.moveTowards(cursor.x - modifier, cursor.y + modifier, context);
      }

      function loop() {
        updateDot();
        animationFrame = requestAnimationFrame(loop);
      }

      function destroy() {
        canvas.remove();
        cancelAnimationFrame(loop);
        element.removeEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onWindowResize);
      }

      function Dot(x, y, width, lag, color) {
        this.position = { x: x, y: y };
        this.width = width;
        this.lag = lag;

        this.moveTowards = function (x, y, context) {
          this.position.x += (x - this.position.x) / this.lag;
          this.position.y += (y - this.position.y) / this.lag;

          context.fillStyle = color;
          context.beginPath();
          context.arc(
            this.position.x,
            this.position.y,
            this.width,
            0,
            2 * Math.PI
          );
          context.fill();
          context.closePath();
        };
      }

      init();

      return {
        destroy: destroy,
      };
    },
  },
};
</script>

<template>
  <main
    class="flex flex-col relative justify-center items-center min-w-[100vw] min-h-[100vh] maincard"
  >
    <div id="following" class="effect"></div>
    <div class="max-w-7xl w-full flex items-center rounded-md z-[10]">
      <div class="max-w-5xl w-full mx-auto min-h-[30vh] text-white">
        <div class="p-4 mt-2 w-full max-w-3xl mx-auto text-center space-y-2">
          <div
            class="rounded-full w-fit overflow-hidden flex mx-auto -mt-32 relative cursor-pointer"
            @click="goToGithub"
          >
            <NuxtImg src="/avi2.jfif" format="jfif" width="200" height="200" />
          </div>

          <h1 class="font-bold tracking-wider text-2xl md:text-3xl">
            Ray Hackshaw
          </h1>
          <div class="leading-tight">
            <h2 class="opacity-70">Auckland, New Zealand</h2>
            <p class="opacity-90">Web Developer</p>
          </div>
          <div class="text-md md:text-lg lg:text-xl max-w-xl mx-auto w-full">
            Born in Hakodate, Japan. Grew up in New Zealand and have spent most
            of my life here. Introduced early on to video games and took an
            interest in development soon after.
            <br />
            <br />Focused on web development and building web applications.
            <p class="opacity-70">Contact me: ray@rayhackshaw.com</p>
          </div>
        </div>
      </div>
    </div>
    <footer
      class="bg-[#131313] bg-opacity-80 p-4 w-full flex gap-2 absolute bottom-0 text-white text-md md:text-lg lg:text-xl"
    >
      <ul class="flex gap-4 md:gap-8 mx-auto lowercase">
        <li class="underline">
          <NuxtLink to="https://www.linkedin.com/in/rayhackshaw/"
            >LinkedIn</NuxtLink
          >
        </li>
        <li class="underline">
          <NuxtLink to="https://github.com/Ray-Hackshaw">Github</NuxtLink>
        </li>
        <li class="underline">
          <NuxtLink to="https://reading.supply/@rhackshaw"
            >ReadingSupply</NuxtLink
          >
        </li>
      </ul>
    </footer>
  </main>
</template>
