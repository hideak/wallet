<script setup lang="ts">
defineProps({
  icon: { type: String },
  label: { type: String },
  leftLabel: { type: String },
  rightLabel: { type: String },
  buttonLabel: { type: String },
  leftIcon: { type: String },
  rightIcon: { type: String },
  buttonIcon: { type: String },
  buttonColor: { type: String },
  placeholder: { type: String },
  type: { type: String, required: true }
});
</script>

<template>
  <div>
    <BaseIconLabel v-if="label" class="d-block mb-2" :label="label" :icon="icon" />
    <BaseInputGroup>
      <BaseIconLabel v-if="leftLabel || leftIcon" class="input-group-text" :icon="leftIcon" :label="leftLabel" />
      <input class="form-control" :type="type" :placeholder="placeholder">
      <BaseIconLabel v-if="rightLabel || rightIcon" class="input-group-text" :icon="rightIcon" :label="rightLabel" />
      <BaseButton v-if="buttonLabel || buttonIcon" :icon="buttonIcon" :label="buttonLabel" :color="buttonColor" />
    </BaseInputGroup>
  </div>
</template>