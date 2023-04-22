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
  type: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <BaseIconLabel v-if="(upperIcon || upperLabel)" class="d-block mb-2" :label="upperLabel" :icon="upperIcon" />
    <BaseInputGroup>
      <BaseIconLabel v-if="(leftLabel || leftIcon)" class="input-group-text" :icon="leftIcon" :label="leftLabel" />
      <input class="form-control" :type="type" :placeholder="placeholder">
      <BaseIconLabel v-if="(rightLabel || rightIcon)" class="input-group-text" :icon="rightIcon" :label="rightLabel" />
      <BaseButton v-if="(buttonIcon || buttonLabel)" :icon="buttonIcon" :label="buttonLabel" :color="buttonColor" />
    </BaseInputGroup>
  </div>
</template>