<script setup lang="ts">
interface Props {
    icon?: string;
    label?: string;
    color?: string;
    disabled?: boolean;
}

const props = defineProps<Props>();
const buttonColorClass = useBsButtonColor(props.color);

const emit = defineEmits(['click']);
</script>

<template>
    <button class="btn" :class="buttonColorClass" @click="emit('click')" :disabled="disabled">
        <BaseIconLabel :icon="icon" :label="label" />
    </button>
</template>
