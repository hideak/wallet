<script setup lang="ts">
import { UserLoginItem } from '~/models/user/item/user-login-item.model';

interface Props {
    item: UserLoginItem;
}

defineProps<Props>();
</script>

<template>
    <button type="button" class="list-group-item list-group-item-action">
        <div>{{ item.name }}</div>
        <small>{{ item.email }}</small>
    </button>
</template>