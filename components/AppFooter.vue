<script lang="ts" setup>
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
const NavMenus: MenuItem[] = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "about",
    url: "/about",
  },
  {
    name: "articles",
    url: "/articles",
  },
];
</script>

<template>
  <footer class="min-h-96 flex flex-col relative">
    <div
      class="grid xl:max-w-7xl mx-auto gap-8 mt-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:px-0 px-4 py-5 relative z-10"
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
        <ul class="flex flex-col gap-2 justify-start">
          <li v-for="menu in NavMenus" :key="menu.name">
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
          Recent Articles
        </h3>
        <ContentList path="/article">
          <template #default="{ list }">
            <div v-for="article in list" :key="article.title">
              <NuxtLink :to="article._path">
                <h2
                  class="text-lg font-semibold mb-2 hover:border-white border-b-2 border-transparent w-fit duration-300"
                >
                  {{ article.title }}
                </h2>
              </NuxtLink>
            </div>
          </template>
          <template #not-found>
            <p>No articles yet!.</p>
          </template>
        </ContentList>
      </div>
    </div>
    <div class="border-t border-gray-500/50 py-4 relative z-10">
      <div class="max-w-7xl mx-auto flex">
        <p class="text-sm font-semibold text-gray-500 mr-auto">
          Copyright © 2024, Aryabh
        </p>
        <NuxtLink
          to="https://github.com/aryabhthakur/aryabh.com"
          target="_blank"
          class="text-sm font-semibold text-gray-500 hover:text-white duration-300 ml-auto"
        >
          This site source code is available on GitHub
        </NuxtLink>
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
