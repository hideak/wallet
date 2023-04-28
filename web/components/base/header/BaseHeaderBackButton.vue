<script setup lang="ts">
const router = useRouter();
</script>

<template>
    <BaseButton class="text-white" icon="arrow-left" @click="router.back()" />
</template>