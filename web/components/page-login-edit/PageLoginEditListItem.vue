<script setup lang="ts">
import { UserEditItem } from '~/models/user/user-edit-item.model';

defineProps({
    item: { type: Object as PropType<UserEditItem>, required: true }
});

const router = useRouter();
</script>

<template>
    <button type="button" class="list-group-item list-group-item-action" @click="router.push(`/login/edit/${item.id}`)">
        <div>{{ item.name }}</div>
    </button>
</template>