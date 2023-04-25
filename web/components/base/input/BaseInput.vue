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
    modelValue: string;
    type: string;
}

defineProps<Props>();

const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <div>
        <BaseIconLabel v-if="(upperIcon || upperLabel)" class="d-block mb-2" :label="upperLabel" :icon="upperIcon" />
        <BaseInputGroup>
            <BaseIconLabel v-if="(leftLabel || leftIcon)" class="input-group-text" :icon="leftIcon" :label="leftLabel" />
            <input class="form-control" :type="type" :placeholder="placeholder" :value="modelValue"
                @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)">
            <BaseIconLabel v-if="(rightLabel || rightIcon)" class="input-group-text" :icon="rightIcon"
                :label="rightLabel" />
            <BaseButton v-if="(buttonIcon || buttonLabel)" :icon="buttonIcon" :label="buttonLabel" :color="buttonColor" />
        </BaseInputGroup>
    </div>
</template>