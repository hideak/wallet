<script setup lang="ts">
interface Props {
    modelValue: boolean;
    label: string;
}

defineProps<Props>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" :value="modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).checked)">
        <label class="form-check-label">{{ label }}</label>
    </div>
</template>