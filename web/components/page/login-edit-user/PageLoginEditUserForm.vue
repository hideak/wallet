<script setup lang="ts">
import { UserEditItem } from '~/models/user/user-edit-item.model';

interface Props {
    user?: UserEditItem;
}

defineProps<Props>();

const router = useRouter();
</script>

<template>
    <BaseForm>
        <BaseButton class="mb-2 w-100" type="button" color="dark" label="Alterar nome"
            @click="user && router.push(`/login/edit/${user.id}/name`)" :disabled="!user" />
        <BaseButton class="mb-2 w-100" type="button" color="dark" label="Alterar e-mail"
            @click="user && router.push(`/login/edit/${user.id}/email`)" :disabled="!user" />
        <BaseButton class="mb-2 w-100" type="button" color="dark" label="Alterar senha"
            @click="user && router.push(`/login/edit/${user.id}/password`)" :disabled="!user || !user.usePassword" />
        <BaseButton class="w-100" type="button" color="dark" label="Desabilitar senha"
            @click="user && router.push(`/login/edit/${user.id}/password-disable`)"
            :disabled="!user || !user.usePassword" />
        <hr>
        <BaseButton class="mb-2 w-100" type="button" color="danger" label="Excluir usuário" :disabled="!user" />
        <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
    </BaseForm>
</template>