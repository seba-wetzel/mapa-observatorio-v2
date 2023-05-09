<script setup lang="ts">
const props = defineProps({
  msg: String,
});
</script>

<template>
  <h1>{{ props.msg }}</h1>
</template>
