<script lang="ts" setup>
const githubUrl = process.env.GITHUB_URL;
const twitterUrl = process.env.TWITTER_URL;
const dribbbleUrl = process.env.DRIBBBLE_URL;
type MenuItem = {
  name: string;
  url: string;
};
const Menus: MenuItem[] = [
  {
    name: "contact",
    url: "/contact",
  },
  {
    name: "projects",
    url: "/projects",
  },
  {
    name: "designs",
    url: "/designs",
  },
];
</script>

<template>
  <footer class="min-h-96 flex flex-col relative">
    <div
      class="grid xl:max-w-7xl mx-auto gap-8 mt-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:px-0 px-4 py-5 relative z-10"
    >
      <div class="col-span-1">
        <h3
          class="mb-2 block font-semibold underline underline-offset-4 lg:mb-4 text-yellow-500"
        >
          About
        </h3>
        <p>
          Hello, I am Aryabh, a full-stack developer with a keen interest in
          developing clean & intuitive UIs.
        </p>
        <div class="flex gap-3 mt-5 items-center">
          <a
            target="_blank"
            :href="githubUrl"
            class="p-2 duration-300 cursor-pointer rounded-full border border-gray-500/20 hover:bg-white/10"
          >
            <Icon name="mdi:github" size="1.75em" />
          </a>
          <a
            target="_blank"
            :href="twitterUrl"
            class="p-2 duration-300 cursor-pointer rounded-full border border-gray-500/20 hover:bg-white/10"
          >
            <Icon name="logos:twitter" size="1.75em" />
          </a>
          <a
            target="_blank"
            :href="dribbbleUrl"
            class="p-2 duration-300 cursor-pointer rounded-full border border-gray-500/20 hover:bg-white/10"
          >
            <Icon name="logos:dribbble-icon" size="1.75em" />
          </a>
        </div>
      </div>
      <div class="col-span-1">
        <h3
          class="mb-2 block font-semibold underline underline-offset-4 lg:mb-4 text-yellow-500"
        >
          Work
        </h3>
        <ul class="flex flex-col gap-2 justify-start">
          <li v-for="menu in Menus" :key="menu.name">
            <router-link active-class="underline" :to="menu.url">{{
              menu.name
            }}</router-link>
          </li>
        </ul>
      </div>
      <div class="col-span-1">
        <h3
          class="mb-2 block font-semibold underline underline-offset-4 lg:mb-4 text-yellow-500"
        >
          Navigation
        </h3>
        _
      </div>
      <div class="col-span-1">
        <h3
          class="mb-2 block font-semibold underline underline-offset-4 lg:mb-4 text-yellow-500"
        >
          Recent Articles
        </h3>
        _
      </div>
    </div>
    <div class="border-t border-gray-500/50 py-4 relative z-10">
      <div class="max-w-7xl mx-auto flex">
        <p class="text-sm font-semibold text-gray-500 mr-auto">
          Copyright © 2024, Aryabh
        </p>
      </div>
    </div>
    <div class="w-full h-full absolute top-0 left-0 -z-0">
      <div
        class="w-full h-full from-[#141726] via-[#141726]/50 to-transparent bg-gradient-to-b absolute top-0 left-0"
      ></div>
      <img
        src="/bg-pattern.png"
        class="w-full h-full object-cover"
        alt="bg-pattern"
      />
    </div>
  </footer>
</template>
