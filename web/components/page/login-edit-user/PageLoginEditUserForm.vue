<script setup lang="ts">
const router = useRouter();
</script>

<template>
    <BaseButton class="mb-2 w-100" type="button" color="dark" label="Alterar nome"
        @click="router.push('/login/edit/1/name')" />
    <BaseButton class="mb-2 w-100" type="button" color="dark" label="Alterar e-mail"
        @click="router.push('/login/edit/1/email')" />
    <BaseButton class="mb-2 w-100" type="button" color="dark" label="Alterar senha"
        @click="router.push('/login/edit/1/password')" />
    <BaseButton class="w-100" type="button" color="dark" label="Desabilitar senha"
        @click="router.push('/login/edit/1/password-disable')" />
    <hr>
    <BaseButton class="mb-2 w-100" type="button" color="danger" label="Excluir usuário" />
    <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
</template>