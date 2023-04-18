<script setup lang="ts">
const router = useRouter();
</script>

<template>
    <BaseInput type="password" icon="key" label="Senha atual" />
    <hr>
    <BaseButton class="mb-2 w-100" type="button" color="primary" label="Salvar alterações" />
    <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
</template>