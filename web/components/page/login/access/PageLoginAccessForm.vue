<script setup lang="ts">
import BaseForm from '~/components/base/form/BaseForm.vue';
import BaseInput from '~/components/base/input/BaseInput.vue';
import { LoginAccessData } from '~/models/login/login-access-data';
import { userService } from '~/services/user-service';

const route = useRoute();
const router = useRouter();
const passwordInput = ref<InstanceType<typeof BaseInput> | null>(null);
const loginAccessForm = ref<InstanceType<typeof BaseForm> | null>(null);
const loginAccessData = ref<LoginAccessData>(LoginAccessData.empty());

const resetValidity = () => passwordInput.value?.setValidity("");
const setValidity = () => passwordInput.value?.setValidity("A senha informada está incorreta.");

const login = async (): Promise<void> => {
    if (!loginAccessForm.value?.validate()) { return; }

    const userId = Number(route.params.id);
    const password = loginAccessData.value.password;
    const isPasswordValid = await userService.validatePassword(userId, password);

    if (!isPasswordValid) { setValidity(); return; }
    // todo: navigate to home page
};
</script>

<template>
    <BaseForm ref="loginAccessForm">
        <BaseInput ref="passwordInput" type="password" upperIcon="key" upperLabel="Senha" required
            v-model="loginAccessData.password" invalidFeedback="A senha não deve estar em branco."
            @update:modelValue="resetValidity()" />
        <hr>
        <BaseButton class="mb-2 w-100" type="button" color="primary" label="Entrar" @click="login()" />
        <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
    </BaseForm>
</template>