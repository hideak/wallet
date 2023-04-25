<script setup lang="ts">
import { User } from '~/entities/user/user.entity';
import { UserNewForm } from '~/models/user/user-new-form.model';
import { passwordService } from '~/services/password.service';
import { userService } from '~/services/user.service';

const router = useRouter();
const userNewForm = ref(UserNewForm.fromBlank());

const createUser = async () => {
    const hashedPassword = await passwordService.hash(userNewForm.value.password);
    const newUser = User.fromUserNewForm(userNewForm.value, hashedPassword);

    await userService.createUser(newUser);
};
</script>

<template>
    <BaseInput class="mb-3" type="text" upperIcon="person-circle" upperLabel="Nome" v-model="userNewForm.name" />
    <BaseInput class="mb-3" type="text" upperIcon="envelope" upperLabel="E-mail" v-model="userNewForm.email" />
    <BaseSwitch type="text" label="Proteger usuário por senha?" v-model="userNewForm.usePassword" />
    <BaseInput v-if="userNewForm.usePassword" class="my-3" type="password" upperIcon="key" upperLabel="Senha"
        v-model="userNewForm.password" />
    <BaseInput v-if="userNewForm.usePassword" type="password" upperIcon="key" upperLabel="Confirmar senha"
        v-model="userNewForm.passwordConfirmation" />
    <hr>
    <BaseButton class="mb-2 w-100" type="button" color="primary" label="Criar usuário" @click="createUser()" />
    <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
</template>