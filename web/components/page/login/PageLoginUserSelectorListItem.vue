<script setup lang="ts">
import { UserLoginItem } from '~/models/user/item/user-login-item';

interface Props {
    item: UserLoginItem;
}

defineProps<Props>();
const router = useRouter();
</script>

<template>
    <button type="button" class="list-group-item list-group-item-action" @click="router.push(`/login/access/${item.id}`)">
        <div>{{ item.name }}</div>
        <small>{{ item.email }}</small>
    </button>
</template>