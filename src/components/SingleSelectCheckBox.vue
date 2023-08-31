<template>
  <input
    :id="id"
    type="checkbox"
    :name="id"
    :checked="checked"
    @change="emits('change')"
  >
</template>

<script setup lang="ts">
import { inject } from 'vue';

const emits = defineEmits(['change']);

defineProps({
  checked: { type: Boolean, required: true },
});

const themeColor = inject('themeColor');

const id = (Math.random() + 1).toString(36).substring(7)
</script>

<style lang="scss" scoped>
</style>
