<script lang="ts" setup>
const gotopbtn = ref<HTMLButtonElement | null>(null);

onMounted(() => {
  window.addEventListener("scroll", () => {
    var curr = window.scrollY;
    if (curr >= 100) {
      gotopbtn?.value?.setAttribute("data-onscroll", "true");
    } else {
      gotopbtn?.value?.setAttribute("data-onscroll", "false");
    }
  });
});
</script>
<template>
  <button
    ref="gotopbtn"
    @click="scrollToTop"
    data-onscroll="false"
    class="bg-white/10 p-2 md:p-4 fixed right-5 md:right-10 bottom-0 data-[onscroll=true]:bottom-14 invisible data-[onscroll=true]:visible opacity-0 data-[onscroll=true]:opacity-100 rounded-full hover:bg-white/50 z-50 duration-200"
  >
    <Icon name="heroicons:arrow-up" size="2em" />
  </button>
</template>
<script lang="ts">
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>