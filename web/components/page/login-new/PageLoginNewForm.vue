<script setup lang="ts">
const router = useRouter();
const passwordSwitch = ref(false);
</script>

<template>
    <BaseInput class="mb-3" type="text" upperIcon="person-circle" upperLabel="Nome" />
    <BaseInput class="mb-3" type="text" upperIcon="envelope" upperLabel="E-mail" />
    <BaseSwitch type="text" label="Proteger usuário por senha?" v-model="passwordSwitch" />
    <BaseInput v-if="passwordSwitch" class="my-3" type="password" upperIcon="key" upperLabel="Senha" />
    <BaseInput v-if="passwordSwitch" type="password" upperIcon="key" upperLabel="Confirmar senha" />
    <hr>
    <BaseButton class="mb-2 w-100" type="button" color="primary" label="Criar usuário" />
    <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
</template>