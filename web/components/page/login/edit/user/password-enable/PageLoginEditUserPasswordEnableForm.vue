<script setup lang="ts">
import BaseForm from '~/components/base/form/BaseForm.vue';
import { UserEditPasswordEnableData } from '~/models/user/data/user-edit-password-enable-data.model';
import { userService } from '~/services/user.service';

const route = useRoute();
const router = useRouter();
const userEditPasswordEnableForm = ref<InstanceType<typeof BaseForm> | null>(null);
const userEditPasswordEnableData = ref(UserEditPasswordEnableData.empty());

const enableUserPassword = async () => {
    if (!userEditPasswordEnableForm.value?.validate()) { return; };

    const userId = Number(route.params.id);
    await userService.enableUserPassword(userId, userEditPasswordEnableData.value);
    router.back();
}
</script>

<template>
    <BaseForm ref="userEditPasswordEnableForm">
        <BaseInput class="mb-3" type="password" upperIcon="key" upperLabel="Senha"
            v-model="userEditPasswordEnableData.password" :validationFn="validatePassword"
            :validationData="{ password: userEditPasswordEnableData.password }" />
        <BaseInput type="password" upperIcon="key" upperLabel="Confirmar senha"
            v-model="userEditPasswordEnableData.passwordConfirmation" :validationFn="validatePasswordConfirmation"
            :validationData="{ password: userEditPasswordEnableData.password, passwordConfirmation: userEditPasswordEnableData.passwordConfirmation }" />
        <hr>
        <BaseButton class="mb-2 w-100" type="button" color="primary" label="Salvar alterações"
            @click="enableUserPassword()" />
        <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
    </BaseForm>
</template>