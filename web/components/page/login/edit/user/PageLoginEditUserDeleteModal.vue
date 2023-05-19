<script setup lang="ts">
import BaseForm from '~/components/base/form/BaseForm.vue';
import BaseInput from '~/components/base/input/BaseInput.vue';
import { UserDeleteData } from '~/models/user/data/user-delete-data';
import { UserEditItem } from '~/models/user/item/user-edit-item';
import { userService } from '~/services/user-service';

interface Props {
    user?: UserEditItem;
}

const route = useRoute();
const router = useRouter();
const props = defineProps<Props>();
const passwordInput = ref<InstanceType<typeof BaseInput> | null>(null);
const userDeleteForm = ref<InstanceType<typeof BaseForm> | null>(null);
const userDeleteData = ref<UserDeleteData>(UserDeleteData.empty());

const { modal, show, hide } = useModal();

const resetValidity = () => passwordInput.value?.setValidity("");
const setValidity = () => passwordInput.value?.setValidity("A senha informada está incorreta.");

const deleteUser = async (): Promise<void> => {
    const userId = Number(route.params.id);

    if (props.user?.usePassword) {
        if (!userDeleteForm.value?.validate()) { return; }

        const password = userDeleteData.value.password;
        const isPasswordValid = await userService.validatePassword(userId, password);

        if (!isPasswordValid) { setValidity(); return; }
    }

    await userService.deleteUser(userId);
    await modal.value?.hide();
    await router.push('/login');
};

defineExpose({
    show,
    hide
});
</script>

<template>
    <BaseModal ref="modal" id="user-delete-modal">
        <BaseModalHeader icon="exclamation-diamond" label="Excluir usuário" />
        <BaseModalBody>
            <div>Tem certeza que deseja excluir este usuário? Esta ação é irreversível.</div>
            <BaseForm v-if="props.user?.usePassword" ref="userDeleteForm">
                <p class="mt-2">Para confirmar, digite a senha do usuário:</p>
                <BaseInput ref="passwordInput" class="mb-3" type="password" upperIcon="key" upperLabel="Senha atual"
                    required v-model="userDeleteData.password" invalidFeedback="A senha não deve estar em branco."
                    @update:modelValue="resetValidity()" />
            </BaseForm>
        </BaseModalBody>
        <BaseModalFooter>
            <BaseButton color="dark" data-bs-dismiss="modal" label="Cancelar" />
            <BaseButton color="danger" label="Excluir definitivamente" @click="deleteUser()" />
        </BaseModalFooter>
    </BaseModal>
</template>