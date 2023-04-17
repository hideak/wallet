<script setup lang="ts">
defineProps({
    icon: { type: String }
});
</script>

<template>
    <i :class="`bi bi-${icon}`"></i>
</template>
