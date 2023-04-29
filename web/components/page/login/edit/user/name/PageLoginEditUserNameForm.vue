<script setup lang="ts">
import BaseForm from '~/components/base/form/BaseForm.vue';
import { UserEditNameData } from '~/models/user/data/user-edit-name-data';
import { userService } from '~/services/user-service';

const route = useRoute();
const router = useRouter();
const userEditNameForm = ref<InstanceType<typeof BaseForm> | null>(null);
const userEditNameData = ref<UserEditNameData | null>(null);

onMounted(async () => {
    const userId = Number(route.params.id);
    userEditNameData.value = await userService.getUserEditNameData(userId);
});

const editUserName = async () => {
    if (!userEditNameData.value) { return; }
    if (!userEditNameForm.value?.validate()) { return; }

    const userId = Number(route.params.id);
    await userService.editUserName(userId, userEditNameData.value);
    router.back();
};
</script>

<template>
    <div>
        <BaseSpinner v-if="!userEditNameData" />
        <BaseForm v-else ref="userEditNameForm">
            <BaseInput type="text" upperIcon="person-circle" upperLabel="Nome" v-model="userEditNameData.name" required
                invalidFeedback="Insira um nome válido." />
            <hr>
            <BaseButton class="mb-2 w-100" type="button" color="primary" label="Salvar alterações"
                @click="editUserName()" />
            <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
        </BaseForm>
    </div>
</template>