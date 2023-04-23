<script setup lang="ts">
const router = useRouter();
</script>

<template>
    <BaseButton class="text-white" upperIcon="arrow-left" @click="router.back()" />
</template>