<script setup lang="ts">
interface Props {
    icon?: string;
    label?: string;
}

defineProps<Props>();
</script>

<template>
    <div class="modal-header">
        <h5 class="modal-title">
            <BaseIconLabel :icon="icon" :label="label" />
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
</template>