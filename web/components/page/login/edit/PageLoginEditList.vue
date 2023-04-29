<script setup lang="ts">
import { UserEditItem } from '~/models/user/item/user-edit-item';
import { userService } from '~/services/user-service';

const userEditItems = ref<UserEditItem[]>([]);

onMounted(async () => {
    userEditItems.value = await userService.getAllUserEditItems();
});
</script>

<template>
    <div class="list-group mb-3">
        <PageLoginEditListItem v-for="item in userEditItems" :key="item.id" :item="item" />
    </div>
</template>