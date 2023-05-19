import BaseModal from '~/components/base/modal/BaseModal.vue';

/**
 * Create modal reference and methods to show and hide the modal
 */
export const useModal = () => {
    const modal = ref<InstanceType<typeof BaseModal> | null>(null);

    const show = async () => {
        await modal.value?.show();
    };

    const hide = async () => {
        await modal.value?.show();
    };

    return { modal, show, hide };
}