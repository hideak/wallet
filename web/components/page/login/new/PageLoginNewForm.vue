<script setup lang="ts">
import BaseForm from '~/components/base/form/BaseForm.vue';
import { UserNewData } from '~/models/user/data/user-new-data';
import { userService } from '~/services/user-service';

const router = useRouter();
const userNewForm = ref<InstanceType<typeof BaseForm> | null>(null);
const userNewData = ref(UserNewData.empty());

const createUser = async () => {
    if (!userNewForm.value?.validate()) { return; };

    await userService.createUser(userNewData.value);
    router.back();
};
</script>

<template>
    <BaseForm ref="userNewForm">
        <BaseInput class="mb-3" type="text" upperIcon="person-circle" upperLabel="Nome" required
            invalidFeedback="Insira um nome válido" v-model="userNewData.name" />
        <BaseInput class="mb-3" type="email" upperIcon="envelope" upperLabel="E-mail" required
            invalidFeedback="Insira um e-mail válido" v-model="userNewData.email" />
        <BaseSwitch type="text" label="Proteger usuário por senha?" v-model="userNewData.usePassword" />
        <BaseInput v-show="userNewData.usePassword" class="my-3" type="password" upperIcon="key" upperLabel="Senha"
            v-model="userNewData.password" :validationFn="validatePassword"
            :validationData="{ usePassword: userNewData.usePassword, password: userNewData.password }" />
        <BaseInput v-show="userNewData.usePassword" type="password" upperIcon="key" upperLabel="Confirmar senha"
            v-model="userNewData.passwordConfirmation" :validationFn="validatePasswordConfirmation" :validationData="{
                    usePassword: userNewData.usePassword, password: userNewData.password, passwordConfirmation: userNewData.passwordConfirmation
                }" />
        <hr>
        <BaseButton class="mb-2 w-100" type="button" color="primary" label="Criar usuário" @click="createUser()" />
        <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
    </BaseForm>
</template>