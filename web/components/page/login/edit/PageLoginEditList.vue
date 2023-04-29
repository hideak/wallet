<script setup lang="ts">
import { UserEditItem } from '~/models/user/item/user-edit-item';
import { userService } from '~/services/user-service';

const userEditItems = ref<UserEditItem[] | null>(null);

onMounted(async () => {
    userEditItems.value = await userService.getAllUserEditItems();
});
</script>

<template>
    <div>
        <BaseSpinner v-if="!userEditItems" class="mb-3" />
        <div v-else class="list-group mb-3">
            <PageLoginEditListItem v-for="item in userEditItems" :key="item.id" :item="item" />
        </div>
    </div>
</template>