<script setup lang="ts">
import { ref } from "vue";
const open = ref(true);
const toggle = () => {
  open.value = !open.value;
};
</script>
<template>
  <button @click="toggle">CLick</button>
  <div class="relative">
    <Drawer
      v-model="open"
      :left="true"
      :absolute="true"
      :noBackdrop="true"
      :width="250"
      :zIndex="1000"
      :maxSpan="100"
      :backdropOpacity="0.3"
      background="#FFFFFF00"
      headerFontSize="20px"
      padding="0px"
    >
      <slot></slot>
    </Drawer>
  </div>
</template>
