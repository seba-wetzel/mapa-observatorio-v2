<script setup lang="ts">
import { ref } from "vue";

const drawer = ref<HTMLElement | null>(null);

const setSelectRef = (el: unknown) => {
  if (el) {
    drawer.value = el as HTMLElement;
  }
};

const startPos = ref(0);
const drawerOpen = ref(false);
const drawerHeight = ref(0);

// Touch start
const touchstart = (e: TouchEvent) => {
  const touch = e.targetTouches[0];
  startPos.value = touch.pageY;
  drawerHeight.value = drawer.value ? drawer.value.offsetHeight : 200;
};

const touchmove = (event: TouchEvent) => {
  const touch = event.targetTouches[0].pageY;
  const change = Math.abs(startPos.value - touch);
  const swipeDirection = startPos.value - touch > 0 ? "up" : "down";
  const trehold = drawerHeight.value / 2;
  if (!drawerOpen.value && swipeDirection === "up" && change > trehold) {
    drawerOpen.value = true;
  } else if (
    drawerOpen.value &&
    swipeDirection === "down" &&
    change > trehold
  ) {
    drawerOpen.value = false;
  }
};

const onClickOutside = (event: Event) => {
  if (drawer.value && !drawer.value.contains(event.target as Node)) {
    drawerOpen.value = false;
  }
};

const onButtomClick = () => {
  drawerOpen.value = !drawerOpen.value;
};
</script>
<template>
  <footer
    :ref="setSelectRef"
    class="foo shadow"
    :class="drawerOpen ? 'open' : 'close'"
    @touchmove="touchmove"
    @touchstart="touchstart"
    v-click-outside="onClickOutside"
  >
    <v-btn
      class="!absolute -top-4 right-3"
      color="blue-grey"
      elevation="3"
      :icon="!drawerOpen ? 'mdi-arrow-up' : 'mdi-arrow-down'"
      @click="onButtomClick"
      @touchstart="(e:Event) => e.stopPropagation()"
    ></v-btn>
    <div class="flex flex-col flex-grow justify-between items-center">
      <div class="select-none min-h-[50px] flex items-center">
        <slot name="title"></slot>
      </div>
      <div class="select-none flex h-60 w-full mx-4 mb-4 overflow-y-scroll">
        <slot name="content"></slot>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  /* Dejo esta variable por si se utiliza en algun lado mas */
  --transicion: 0.7s ease-in-out;
}

.open {
  max-height: 50%;
}
.close {
  max-height: 50px;
}
.shadow {
  @apply shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset];
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.foo {
  @apply fixed bg-white z-10 bottom-0 rounded-t-lg;
  transition: var(--transicion);
}
</style>
