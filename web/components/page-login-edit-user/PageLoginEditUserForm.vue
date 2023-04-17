<script setup lang="ts">
const router = useRouter();
</script>

<template>
    <BaseButton class="mb-2 w-100" type="button" color="dark" label="Alterar nome" />
    <BaseButton class="mb-2 w-100" type="button" color="dark" label="Alterar e-mail" />
    <BaseButton class="mb-2 w-100" type="button" color="dark" label="Alterar senha" />
    <BaseButton class="w-100" type="button" color="dark" label="Desabilitar senha" />
    <hr>
    <BaseButton class="mb-2 w-100" type="button" color="danger" label="Excluir usuário" />
    <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.push('/login')" />
</template>