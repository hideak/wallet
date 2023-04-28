<script setup lang="ts">
interface Props {
    upperLabel?: string;
    leftLabel?: string;
    rightLabel?: string;
    buttonLabel?: string;
    upperIcon?: string;
    leftIcon?: string;
    rightIcon?: string;
    buttonIcon?: string;
    buttonColor?: string;
    placeholder?: string;
    required?: boolean;
    pattern?: string;
    minlength?: number;
    maxlength?: number;
    validFeedback?: string;
    invalidFeedback?: string;
    step?: number;
    modelValue: string;
    type: string;
    validationData?: object;
    validationFn?: (validationData: any) => string;
}

const props = defineProps<Props>();
const inputRef = ref<HTMLInputElement | null>(null);
const invalidFeedback = ref(props.invalidFeedback);
const emit = defineEmits(['update:modelValue']);

const handleInput = (event: Event): void => {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement?.value;
    emit('update:modelValue', value);
};

watch(() => props.validationData, (newValidationData: any): void => {
    if (!props.validationFn) { return; }
    const inputElement = inputRef.value;
    const validationResult = props.validationFn(newValidationData);

    invalidFeedback.value = validationResult;
    inputElement?.setCustomValidity(validationResult);
});
</script>

<template>
    <div>
        <BaseIconLabel v-if="(upperIcon || upperLabel)" class="d-block mb-2" :label="upperLabel" :icon="upperIcon" />
        <BaseInputGroup>
            <BaseIconLabel v-if="(leftLabel || leftIcon)" class="input-group-text" :icon="leftIcon" :label="leftLabel" />
            <input class="form-control" :type="type" :placeholder="placeholder" :value="modelValue" :required="required"
                :pattern="pattern" :minlength="minlength" :maxlength="maxlength" :step="step" ref="inputRef"
                @input="handleInput($event)">
            <BaseIconLabel v-if="(rightLabel || rightIcon)" class="input-group-text" :icon="rightIcon"
                :label="rightLabel" />
            <BaseButton v-if="(buttonIcon || buttonLabel)" :icon="buttonIcon" :label="buttonLabel" :color="buttonColor" />
            <div v-if="validFeedback" class="valid-feedback">{{ validFeedback }}</div>
            <div v-if="invalidFeedback" class="invalid-feedback">{{ invalidFeedback }}</div>
        </BaseInputGroup>
    </div>
</template>