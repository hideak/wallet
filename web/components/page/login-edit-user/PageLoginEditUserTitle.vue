<script setup lang="ts">
import { UserEditItem } from '~/models/user/item/user-edit-item.model';

interface Props {
    user?: UserEditItem;
}

defineProps<Props>();
</script>

<template>
    <div>
        <h2 v-if="user">{{ user.name }}</h2>
        <BaseSpinner v-else class="mb-2" />
        <p>O que você quer editar neste usuário?</p>
    </div>
</template>