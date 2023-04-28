<script setup lang="ts">
const wasValidated = ref(false);
const formRef = ref<HTMLFormElement | null>(null);

const validate = (): boolean | undefined => {
    wasValidated.value = true;
    return formRef.value?.checkValidity();
};

const resetValidation = (): void => {
    wasValidated.value = false;
}

defineExpose({
    validate,
    resetValidation
});
</script>

<template>
    <form ref="formRef" :class="{ 'was-validated': wasValidated }">
        <slot></slot>
    </form>
</template>
