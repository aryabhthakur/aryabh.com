<script setup lang="ts">
import { useRoute } from "vue-router";

type MenuItem = {
  name: string;
  url: string;
};
const Menus: MenuItem[] = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "about",
    url: "/about",
  },
  {
    name: "projects",
    url: "/projects",
  },
  {
    name: "designs",
    url: "/designs",
  },
  {
    name: "articles",
    url: "/articles",
  },
];
const headerElement = ref<HTMLHtmlElement | null>(null);
const mobileOpenmenu = reactive({ isOpen: false });
const route = useRoute();
watch(
  route,
  (value) => {
    mobileOpenmenu.isOpen = false;
  },
  { deep: true, immediate: true }
);
onMounted(() => {
  window.addEventListener("scroll", () => {
    var curr = window.scrollY;
    if (curr >= 30) {
      headerElement?.value?.setAttribute("data-onscroll", "true");
    } else {
      headerElement?.value?.setAttribute("data-onscroll", "false");
    }
  });
});
</script>
<template>
  <header
    :data-mobileopen="mobileOpenmenu.isOpen"
    ref="headerElement"
    data-onscroll="false"
    class="h-20 z-50 fixed w-full data-[mobileopen=true]:border-gray-500/50 data-[mobileopen=true]:backdrop-blur-md data-[mobileopen=true]:bg-[#141726]/50 data-[onscroll=true]:bg-[#141726]/50 data-[onscroll=true]:backdrop-blur-md data-[onscroll=true]:border-gray-500/50 border-b-2 border-transparent duration-200 px-4 2xl:px-0"
  >
    <div class="mx-auto flex h-full items-center justify-start max-w-7xl">
      <div class="xl:mr-8 md:mr-4 font-bold text-3xl text-white">
        <img src="/logo.png" alt="" />
      </div>
      <nav
        class="mr-auto text-yellow-500 text-base font-semibold hidden md:block"
      >
        <ul class="flex items-center gap-3 justify-start">
          <li v-for="(menu, i) in Menus" :key="menu.name">
            <NuxtLink
              active-class="border-yellow-500"
              :to="menu.url"
              class="py-2 duration-300 border-b-2 border-transparent hover:border-yellow-500 transition-colors"
              >{{ menu.name }}</NuxtLink
            >
            <span v-if="i + 1 !== Menus.length" class="opacity-50 ml-3">•</span>
          </li>
        </ul>
      </nav>
      <div class="ml-auto hidden md:flex items-center gap-4">
        <div class="flex gap-3 items-center">
          <NuxtLink
            v-if="$config.public.GITHUB_URL"
            target="_blank"
            :href="$config.public.GITHUB_URL"
          >
            <IconButton>
              <Icon name="mdi:github" size="1.75em" />
            </IconButton>
          </NuxtLink>
          <NuxtLink
            v-if="$config.public.TWITTER_URL"
            target="_blank"
            :href="$config.public.TWITTER_URL"
          >
            <IconButton>
              <Icon name="logos:twitter" size="1.75em" />
            </IconButton>
          </NuxtLink>
          <NuxtLink
            v-if="$config.public.DRIBBBLE_URL"
            target="_blank"
            :href="$config.public.DRIBBBLE_URL"
          >
            <IconButton>
              <Icon name="logos:dribbble-icon" size="1.75em" />
            </IconButton>
          </NuxtLink>
        </div>
        <!-- <div class="w-px h-8 bg-white/50"></div>
        <a
          href="https://ssh.studio"
          target="_blank"
          class="bg-red-600 text-white text-base font-medium px-6 py-2.5 rounded-full flex items-center gap-2"
        >
          Go to SSH.Studio
          <Icon
            name="heroicons:arrow-top-right-on-square-solid"
            size="1.25em"
          />
        </a> -->
      </div>
      <div class="ml-auto block md:hidden">
        <button
          @click="mobileOpenmenu.isOpen = !mobileOpenmenu.isOpen"
          class="p-2 duration-300 cursor-pointer rounded-full border border-gray-500/20 flex items-center justify-center hover:bg-white/10 relative w-12 h-12"
        >
          <Icon
            :data-mobileopen="mobileOpenmenu.isOpen"
            name="flowbite:bars-outline"
            size="1.75em"
            class="data-[mobileopen=true]:invisible visible opacity-100 data-[mobileopen=true]:opacity-0 duration-300 absolute"
          />
          <Icon
            :data-mobileopen="mobileOpenmenu.isOpen"
            name="humbleicons:times"
            size="1.75em"
            class="text-red-500 absolute data-[mobileopen=true]:visible invisible opacity-0 data-[mobileopen=true]:opacity-100 duration-300"
          />
        </button>
      </div>
    </div>
  </header>
  <div
    :data-isopen="mobileOpenmenu.isOpen"
    class="fixed opacity-0 data-[isopen=true]:opacity-100 data-[isopen=true]:translate-y-0 translate-y-10 duration-300 invisible data-[isopen=true]:visible backdrop-blur-lg top-20 left-0 z-[999] w-full h-full data-[isopen=true]:bg-[#141726]/50 flex flex-col"
  >
    <nav class="mt-10 text-4xl flex flex-col p-4 items-center">
      <ul class="flex flex-col items-start gap-6 justify-start">
        <li v-for="menu in Menus" :key="menu.name">
          <NuxtLink
            active-class="border-yellow-500"
            :to="menu.url"
            class="py-2 duration-300 border-b-2 border-transparent hover:border-yellow-500 transition-colors"
            >{{ menu.name }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
    <div class="mt-10 mx-auto w-fit flex flex-col items-center gap-4">
      <div class="flex gap-3 items-center">
        <NuxtLink
          v-if="$config.public.GITHUB_URL"
          target="_blank"
          :href="$config.public.GITHUB_URL"
        >
          <IconButton>
            <Icon name="mdi:github" size="1.75em" />
          </IconButton>
        </NuxtLink>
        <NuxtLink
          v-if="$config.public.TWITTER_URL"
          target="_blank"
          :href="$config.public.TWITTER_URL"
        >
          <IconButton>
            <Icon name="logos:twitter" size="1.75em" />
          </IconButton>
        </NuxtLink>
        <NuxtLink
          v-if="$config.public.DRIBBBLE_URL"
          target="_blank"
          :href="$config.public.DRIBBBLE_URL"
        >
          <IconButton>
            <Icon name="logos:dribbble-icon" size="1.75em" />
          </IconButton>
        </NuxtLink>
      </div>
      <!-- <div class="h-px w-8 bg-white/50"></div>
      <a
        href="https://ssh.studio"
        target="_blank"
        class="bg-red-600 text-white text-base font-medium px-6 py-2.5 rounded-full flex items-center gap-2"
      >
        Go to SSH.Studio
        <Icon name="heroicons:arrow-top-right-on-square-solid" size="1.25em" />
      </a> -->
    </div>
  </div>
</template>