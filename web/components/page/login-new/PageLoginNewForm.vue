<script setup lang="ts">
import BaseForm from '~/components/base/form/BaseForm.vue';
import { User } from '~/entities/user/user.entity';
import { UserNewForm } from '~/models/user/user-new-form.model';
import { passwordService } from '~/services/password.service';
import { userService } from '~/services/user.service';

const router = useRouter();
const userNewForm = ref<InstanceType<typeof BaseForm> | null>(null);
const userNewFormData = ref(UserNewForm.fromBlank());

const createUser = async () => {
    if (!userNewForm.value?.validate()) { return; };

    const user = await getUserToCreate();
    await userService.createUser(user);
    router.back();
};

const getUserToCreate = async (): Promise<User> => {
    const password = userNewFormData.value.password;
    const hashedPasswordOrNull = userNewFormData.value.usePassword
        ? await passwordService.hash(password)
        : null;

    return User.fromUserNewForm(userNewFormData.value, hashedPasswordOrNull);
};

const validatePassword = (validationData: any): string => {
    if (!validationData.usePassword) { return ''; }
    if (validationData.password.length >= 6) { return ''; }

    return 'A senha deve possuir mais que 6 caracteres';
}

const validatePasswordConfirmation = (validationData: any): string => {
    if (!validationData.usePassword) { return ''; }
    if (validationData.password === validationData.passwordConfirmation) { return ''; }

    return 'As senhas devem ser iguais';
}
</script>

<template>
    <BaseForm ref="userNewForm">
        <BaseInput class="mb-3" type="text" upperIcon="person-circle" upperLabel="Nome" required
            invalidFeedback="Insira um nome válido" v-model="userNewFormData.name" />
        <BaseInput class="mb-3" type="email" upperIcon="envelope" upperLabel="E-mail" required
            invalidFeedback="Insira um e-mail válido" v-model="userNewFormData.email" />
        <BaseSwitch type="text" label="Proteger usuário por senha?" v-model="userNewFormData.usePassword" />
        <BaseInput v-show="userNewFormData.usePassword" class="my-3" type="password" upperIcon="key" upperLabel="Senha"
            v-model="userNewFormData.password" :validationFn="validatePassword"
            :validationData="{ usePassword: userNewFormData.usePassword, password: userNewFormData.password }" />
        <BaseInput v-show="userNewFormData.usePassword" type="password" upperIcon="key" upperLabel="Confirmar senha"
            v-model="userNewFormData.passwordConfirmation" :validationFn="validatePasswordConfirmation" :validationData="{
                    usePassword: userNewFormData.usePassword, password: userNewFormData.password, passwordConfirmation: userNewFormData.passwordConfirmation
                }" />
        <hr>
        <BaseButton class="mb-2 w-100" type="button" color="primary" label="Criar usuário" @click="createUser()" />
        <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
    </BaseForm>
</template>