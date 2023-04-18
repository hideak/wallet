<script setup lang="ts">
const router = useRouter();
</script>

<template>
    <BaseInput class="mb-3" type="password" icon="key" label="Senha anterior" />
    <BaseInput class="mb-3" type="password" icon="key" label="Nova senha" />
    <BaseInput type="password" icon="key" label="Confirmar senha" />
    <hr>
    <BaseButton class="mb-2 w-100" type="button" color="primary" label="Salvar alterações" />
    <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
</template>