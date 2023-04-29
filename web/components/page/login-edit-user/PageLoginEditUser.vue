<script setup lang="ts">
import { UserEditItem } from '~/models/user/item/user-edit-item.model';
import { userService } from '~/services/user.service';

const route = useRoute();
const userEditItem = ref<UserEditItem>();

onMounted(async () => {
    const userId = Number(route.params.id);
    userEditItem.value = await userService.getUserEditItem(userId);
});
</script>

<template>
    <BaseView>
        <PageLoginEditUserTitle :user="userEditItem" />
        <PageLoginEditUserForm :user="userEditItem" />
    </BaseView>
</template>