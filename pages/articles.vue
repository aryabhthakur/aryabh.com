<script setup lang="ts">
</script>
<template>
  <section
    class="py-32 md:py-64 px-5 md:px-20 xl:px-0 min-h-screen relative w-full"
  >
    <div class="max-w-3xl w-full h-fit mb-32 mx-auto relative z-10">
      <div v-motion-slide-bottom>
        <h1 class="text-6xl font-black mb-2">Articles</h1>
        <p class="text-gray-500">Things I write or love to talk about</p>
        <div class="flex gap-3 items-center mt-5">
          <NuxtLink
            v-if="$config.public.TWITTER_URL"
            target="_blank"
            :href="$config.public.TWITTER_URL"
          >
            <IconButton>
              <Icon name="logos:twitter" size="1.75em" />
            </IconButton>
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col gap-4 mt-20" v-motion-fade>
        <ContentList path="/article">
          <template #default="{ list }">
            <div
              v-for="(article, i) in list"
              :key="article.title"
              class="rounded-xl p-4 border-gray-500/50 border-2"
            >
              <div v-if="i < 1">
                <div class="relative">
                  <NuxtImg
                    loading="lazy"
                    class="object-cover rounded-lg mb-5"
                    :src="article.featImgUrl"
                    v-if="article.featImgUrl"
                  />
                  <div
                    class="w-full h-full items-start justify-start p-4 absolute top-0 left-0 flex"
                  >
                    <span
                      class="px-3 rounded-full py-1 bg-yellow-500/10 font-bold text-yellow-500 text-lg"
                      >{{ article.category }}</span
                    >
                  </div>
                </div>
                <NuxtLink :to="article._path">
                  <h2
                    class="text-3xl font-bold mb-2 hover:border-white border-b-2 border-transparent w-fit duration-300"
                  >
                    {{ article.title }}
                  </h2>
                </NuxtLink>
                <p class="mt-2 opacity-50">{{ article.description }}</p>
              </div>
            </div>
          </template>
          <template #not-found>
            <p>No articles found.</p>
          </template>
        </ContentList>
      </div>
    </div>
    <div class="w-full h-screen absolute -top-60 md:-top-80 left-0 -z-0">
      <div
        class="w-full h-full from-[#141726] via-[#141726] to-transparent bg-gradient-to-tr absolute top-0 left-0"
      ></div>
      <img
        src="/bg-pattern.png"
        class="w-full h-full object-cover"
        alt="bg-pattern"
      />
    </div>
  </section>
</template>
  