<script setup lang="ts">
const router = useRouter();
</script>

<template>
    <button type="button" class="list-group-item list-group-item-action active" @click="router.push('/login/new')">
        <BaseIconLabel icon="plus-circle" label="Novo Usuário" />
    </button>
</template>