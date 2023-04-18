<script setup lang="ts">
const router = useRouter();
</script>

<template>
    <BaseInput type="text" icon="envelope" label="E-mail" />
    <hr>
    <BaseButton class="mb-2 w-100" type="button" color="primary" label="Salvar alterações" />
    <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
</template>