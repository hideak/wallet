<script setup lang="ts">
import BaseForm from '~/components/base/form/BaseForm.vue';
import { UserEditEmailData } from '~/models/user/data/user-edit-email-data';
import { userService } from '~/services/user-service';

const route = useRoute();
const router = useRouter();
const userEditEmailForm = ref<InstanceType<typeof BaseForm> | null>(null);
const userEditEmailData = ref<UserEditEmailData | null>(null);
</script>

<template>
    <div>
        <BaseSpinner v-if="!userEditEmailData" />
        <BaseForm v-else ref="userEditEmailForm">
            <BaseInput type="email" upperIcon="envelope" upperLabel="E-mail" v-model="userEditEmailData.email" required
                invalidFeedback="Insira um e-mail válido." />
            <hr>
            <BaseButton class="mb-2 w-100" type="button" color="primary" label="Salvar alterações" />
            <BaseButton class="w-100" type="button" color="dark" label="Cancelar" @click="router.back()" />
        </BaseForm>
    </div>
</template>