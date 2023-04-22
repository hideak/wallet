<script setup lang="ts">
interface Props {
  icon?: string;
  label?: string;
  path: string;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink :to="path">
    <BaseIconLabel :icon="icon" :label="label" />
  </NuxtLink>
</template>
