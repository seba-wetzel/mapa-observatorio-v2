<script setup lang="ts">
import { ref } from "vue";

const drawer = ref<HTMLElement | null>(null);

const setSelectRef = (el: unknown) => {
  if (el) {
    drawer.value = el as HTMLElement;
  }
};

const startPos = ref({
  x: 0,
  y: 0,
});
const drawerOpen = ref(true);
const startedSwipe = ref(false);
const drawerHeight = ref(0);
const start = 100;
const stop = Math.ceil((window.innerHeight / 100) * 40);

// Touch start
const touchstart = (e: TouchEvent) => {
  const touch = e.targetTouches[0];
  startPos.value.x = touch.pageX;
  startPos.value.y = touch.pageY;
  drawerHeight.value = drawer.value ? drawer.value.offsetHeight : 200;
  startedSwipe.value = true;
};

const touchmove = (event: TouchEvent) => {
  const touch = event.targetTouches[0];
  const change = touch.pageY - startPos.value.y;
  if (change > 30 && drawerOpen.value) {
    // Close drawer
    drawerOpen.value = false;
    startedSwipe.value = false;
    if (drawer.value) {
      drawer.value.className = "foo close";
    }
  } else if (change < 0 && !drawerOpen.value) {
    // Open drawer
    drawerOpen.value = true;
    startedSwipe.value = false;
    if (drawer.value) {
      drawer.value.className = "foo open";
    }
  }
};

const touchend = (event: TouchEvent) => {
  const touch = event.changedTouches[0];
  if (startedSwipe && touch.pageY <= drawerHeight.value / 2) {
    // Close drawer
    drawerOpen.value = false;
    startedSwipe.value = false;
    if (drawer.value) {
      drawer.value.className = "foo close";
    }
  } else if (startedSwipe.value && touch.pageY > drawerHeight.value / 2) {
    // Open drawer
    drawerOpen.value = true;
    startedSwipe.value = false;
    if (drawer.value) {
      drawer.value.className = "foo open";
    }
  }
};

const onClickOutside = (event: Event) => {
  if (drawer.value && !drawer.value.contains(event.target as Node)) {
    drawerOpen.value = false;
    drawer.value.className = "foo close";
  }
};
</script>
<template>
  <footer
    :ref="setSelectRef"
    class="foo close"
    @touchmove="touchmove"
    @touchstart="touchstart"
    @touchend="touchend"
    v-click-outside="onClickOutside"
  >
    <v-btn
      class="relative -top-4 inset-x-[90%]"
      color="secondary"
      elevation="3"
      icon="mdi-magnify"
    ></v-btn>
    <div
      class="flex flex-grow justify-center items-center"
      color="primary"
      width="100%"
    >
      <h1 class="text-white">Nisi veniam quis veniam non nostrud.</h1>
    </div>
  </footer>
</template>

<style scoped>
/* apply tailwind classes to open class */
:root {
  --animation: 1s ease-in-out;
}
.open {
  min-height: 200px;
  @apply bg-red-500;
}
.close {
  min-height: 50px;
}

.foo {
  @apply fixed  w-full z-50;
  @apply bottom-0;
  transition: 0.5s ease-in-out;
}
</style>
