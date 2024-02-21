<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { computed, useAttrs } from "vue";

const attrs = useAttrs();

const buttonClass = computed(() => {
  return twMerge(
    "p-2 duration-300 cursor-pointer rounded-full border border-gray-500/20 hover:bg-white/10",
    `${attrs.class}`
  );
});
</script>
<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>