<script setup lang="ts">
import BaseForm from '~/components/base/form/BaseForm.vue';
import BaseInput from '~/components/base/input/BaseInput.vue';
import { UserEditPasswordData } from '~/models/user/data/user-edit-password-data';
import { userService } from '~/services/user-service';

const route = useRoute();
const router = useRouter();
const passwordInput = ref<InstanceType<typeof BaseInput> | null>(null);
const userEditPasswordForm = ref<InstanceType<typeof BaseForm> | null>(null);
const userEditPasswordData = ref(UserEditPasswordData.empty());

const resetValidity = () => passwordInput.value?.setValidity("");
const setValidity = () => passwordInput.value?.setValidity("A senha informada está incorreta.");

const editUserPassword = async (): Promise<void> => {
    if (!userEditPasswordForm.value?.validate()) { return; }

    const userId = Number(route.params.id);
    const previousPassword = userEditPasswordData.value.previousPassword;
    const isPreviousPasswordValid = await userService.validatePassword(userId, previousPassword);

    if (!isPreviousPasswordValid) { setValidity(); return; }

    await userService.editUserPassword(userId, userEditPasswordData.value);
    router.back();
};
</script>

<template>
    <BaseForm ref="userEditPasswordForm">
        <BaseInput class="mb-3" type="password" upperIcon="key" upperLabel="Nova senha"
            v-model="userEditPasswordData.password" :validationFn="validatePassword"
            :validationData="{ password: userEditPasswordData.password }" />
        <BaseInput class="mb-3" type="password" upperIcon="key" upperLabel="Confirmar senha"
            v-model="userEditPasswordData.passwordConfirmation" :validationFn="validatePasswordConfirmation"
            :validationData="{ password: userEditPasswordData.password, passwordConfirmation: userEditPasswordData.passwordConfirmation }" />
        <p>Para alterar a senha, é necessário informara sua senha atual.</p>
        <BaseInput ref="passwordInput" class="mb-3" type="password" upperIcon="key" upperLabel="Senha atual" required
            v-model="userEditPasswordData.previousPassword" invalidFeedback="A senha não deve estar em branco."
            @update:modelValue="resetValidity()" />
        <hr>
        <BaseButton class="mb-2 w-100" type="button" color="primary" label="Salvar alterações"
            @click="editUserPassword()" />
        <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
    </BaseForm>
</template>