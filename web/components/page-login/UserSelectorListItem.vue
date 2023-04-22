<script setup lang="ts">
import { UserLoginItem } from '~/models/user/user-login-item.model';

defineProps({
    item: { type: Object as PropType<UserLoginItem>, required: true }
});
</script>

<template>
    <button type="button" class="list-group-item list-group-item-action">
        <div>{{ item.name }}</div>
        <small>{{ item.email }}</small>
    </button>
</template>