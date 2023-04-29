<script setup lang="ts">
import { UserLoginItem } from '~/models/user/item/user-login-item';
import { userService } from '~/services/user-service';

const userLoginItems = ref<UserLoginItem[] | null>(null);

onMounted(async () => {
    userLoginItems.value = await userService.getAllUserLoginItems();
});
</script>

<template>
    <div>
        <BaseSpinner v-if="!userLoginItems" class="mb-2" />
        <div v-else class="list-group mb-3">
            <PageLoginUserSelectorListItem v-for="item in userLoginItems" :key="item.id" :item="item" />
            <PageLoginUserSelectorListNew />
        </div>
    </div>
</template>