<script setup lang="ts">
interface Props {
    icon?: string;
    label?: string;
}

const props = defineProps<Props>();
const iconMarginClass = useBsIconMargin(props.label);
</script>

<template>
    <span>
        <BaseIcon v-if="icon" :icon="icon" :class="iconMarginClass" />
        <span v-if="label">{{ label }}</span>
    </span>
</template>