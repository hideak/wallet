<script setup lang="ts">
import BaseForm from '~/components/base/form/BaseForm.vue';
import BaseInput from '~/components/base/input/BaseInput.vue';
import { UserEditPasswordDisableData } from '~/models/user/data/user-edit-password-disable-data';
import { userService } from '~/services/user-service';

const route = useRoute();
const router = useRouter();
const passwordInput = ref<InstanceType<typeof BaseInput> | null>(null);
const userEditPasswordDisableForm = ref<InstanceType<typeof BaseForm> | null>(null);
const userEditPasswordDisableData = ref(UserEditPasswordDisableData.empty());

const resetValidity = () => passwordInput.value?.setValidity("");
const setValidity = () => passwordInput.value?.setValidity("A senha informada está incorreta.");

const disableUserPassword = async (): Promise<void> => {
    if (!userEditPasswordDisableForm.value?.validate()) { return; }

    const userId = Number(route.params.id);
    const password = userEditPasswordDisableData.value.password;
    const isPasswordValid = await userService.validatePassword(userId, password);

    if (!isPasswordValid) { setValidity(); return; }
    await userService.disableUserPassword(userId);
    router.back();
};
</script>

<template>
    <BaseForm ref="userEditPasswordDisableForm">
        <BaseInput ref="passwordInput" class="mb-3" type="password" upperIcon="key" upperLabel="Senha atual" required
            v-model="userEditPasswordDisableData.password" invalidFeedback="A senha não deve estar em branco."
            @update:modelValue="resetValidity()" />
        <hr>
        <BaseButton class="mb-2 w-100" type="button" color="primary" label="Salvar alterações"
            @click="disableUserPassword()" />
        <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
    </BaseForm>
</template>