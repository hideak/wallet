<script setup lang="ts">
import { Modal } from 'bootstrap';

interface Props {
    id: string;
}

const props = defineProps<Props>();
const modal = ref<Modal | null>(null);

const getModal = async () => {
    if (modal.value) { return modal.value };

    const { Modal } = await import('bootstrap');
    const modalElement = document.getElementById(props.id);
    if (!modalElement) { return; }

    modal.value = new Modal(modalElement);
    return modal.value;
}

const show = async () => {
    const instance = await getModal();
    instance?.show();
}

const hide = async () => {
    const instance = await getModal();
    instance?.hide();
}

defineExpose({
    show,
    hide
});
</script>

<template>
    <div class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" :id="id">
        <div class="modal-dialog">
            <div class="modal-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>