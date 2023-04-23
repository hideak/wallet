<script setup lang="ts">
interface Props {
  icon?: string;
  label?: string;
  color?: string;
}

const props = defineProps<Props>();
const buttonColorClass = useBsButtonColor(props.color);

const emit = defineEmits(['click']);
</script>

<template>
  <button class="btn" :class="buttonColorClass" @click="emit('click')">
    <BaseIconLabel :icon="icon" :label="label" />
  </button>
</template>
