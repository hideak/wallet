<script setup lang="ts">
import { UserEditItem } from '~/models/user/item/user-edit-item.model';

interface Props {
    item: UserEditItem;
}

defineProps<Props>();
const router = useRouter();
</script>

<template>
    <button type="button" class="list-group-item list-group-item-action" @click="router.push(`/login/edit/${item.id}`)">
        <div>{{ item.name }}</div>
    </button>
</template>