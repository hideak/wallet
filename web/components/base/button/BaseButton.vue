<script setup lang="ts">
interface Props {
    icon?: string;
    label?: string;
    color?: string;
    dataBsToggle?: string;
    dataBsTarget?: string;
    dataBsDismiss?: string;
    disabled?: boolean;
}

const props = defineProps<Props>();
const buttonColorClass = useBsButtonColor(props.color);

const emit = defineEmits(['click']);
</script>

<template>
    <button type="button" class="btn" :class="buttonColorClass" :disabled="disabled" @click="emit('click')"
        :data-bs-toggle="dataBsToggle" :data-bs-target="dataBsTarget" :data-bs-dismiss="dataBsDismiss">
        <BaseIconLabel :icon="icon" :label="label" />
    </button>
</template>
