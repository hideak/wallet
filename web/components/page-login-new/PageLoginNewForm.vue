<script setup lang="ts">
const router = useRouter();
const passwordSwitch = ref(false);
</script>

<template>
    <BaseInput class="mb-3" type="text" icon="person-circle" label="Nome" />
    <BaseInput class="mb-3" type="text" icon="envelope" label="E-mail" />
    <BaseSwitch type="text" label="Proteger usuário por senha?" v-model="passwordSwitch" />
    <BaseInput v-if="passwordSwitch" class="my-3" type="password" icon="key" label="Senha" />
    <BaseInput v-if="passwordSwitch" type="password" icon="key" label="Confirmar senha" />
    <hr>
    <BaseButton class="mb-2 w-100" type="button" color="primary" label="Criar usuário" />
    <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
</template>