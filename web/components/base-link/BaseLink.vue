<script setup lang="ts">
defineProps({
  icon: { type: String },
  label: { type: String },
  path: { type: String }
});
</script>

<template>
  <NuxtLink :to="path">
    <BaseIconLabel :icon="icon" :label="label" />
  </NuxtLink>
</template>
