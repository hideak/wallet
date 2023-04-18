<script setup lang="ts">
const router = useRouter();
</script>

<template>
    <BaseButton type="button" label="Cancelar" color="dark" @click="router.back()" />
</template>