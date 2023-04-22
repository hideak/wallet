<script setup lang="ts">
interface Props {
    icon: string;
}

const props = defineProps<Props>();
const iconNameClass = useBsIconName(props.icon);
</script>

<template>
    <i :class="iconNameClass"></i>
</template>
