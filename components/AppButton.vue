<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import { computed, useAttrs } from 'vue';

const attrs = useAttrs()

const buttonClass = computed(() => {
    return twMerge('', `${attrs.class}`)
})
</script>
<template>
    <button :class="buttonClass">
        <slot />
    </button>
</template>
<script lang="ts">
    export default {
        inheritAttrs: false
    }
</script>