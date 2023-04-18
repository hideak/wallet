<script setup lang="ts">
defineProps({
    modelValue: { type: Boolean },
    label: { type: String }
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" :value="modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).checked)">
        <label class="form-check-label">{{ label }}</label>
    </div>
</template>