<script setup lang="ts">
const route = useRoute();
const data = await queryContent(route.path).only(["_path", "title"]).findOne();
const twitterShareURL = `https://twitter.com/intent/tweet?text=%22${data.title}%22%20by%20%40_aryabh,%20https%3A//aryabh.com${route.path}`;
const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${route.fullPath}`;
const linkedinShareURL = `https://www.linkedin.com/shareArticle?mini=true&url=${route.fullPath}`;
</script>
<template>
  <ContentDoc>
    <template #default="{ doc }">
      <main
        class="py-32 md:py-64 px-5 md:px-20 xl:px-0 min-h-screen relative w-full"
      >
        <article class="max-w-3xl relative w-full h-fit mb-32 mx-auto z-10">
          <div v-motion-slide-bottom>
            <span
              class="px-3 rounded-full py-1 bg-yellow-500/10 font-bold text-yellow-500 text-lg"
              >{{ doc.category }}</span
            >
            <h1 class="text-6xl font-black my-2">{{ doc.title }}</h1>
            <p class="text-gray-500">
              {{ doc.description }}
            </p>
            <div class="flex gap-3 items-center my-5">
              <NuxtLink
                v-if="twitterShareURL"
                target="_blank"
                :href="twitterShareURL"
              >
                <IconButton>
                  <Icon name="logos:twitter" size="1.75em" />
                </IconButton>
              </NuxtLink>
              <NuxtLink
                v-if="facebookShareURL"
                target="_blank"
                :href="facebookShareURL"
              >
                <IconButton>
                  <Icon name="logos:facebook" size="1.75em" />
                </IconButton>
              </NuxtLink>
              <NuxtLink
                v-if="linkedinShareURL"
                target="_blank"
                :href="linkedinShareURL"
              >
                <IconButton>
                  <Icon name="logos:linkedin-icon" size="1.75em" />
                </IconButton>
              </NuxtLink>
            </div>
          </div>
          <NuxtImg
            loading="lazy"
            class="object-cover rounded-lg"
            :src="doc.featImgUrl"
            v-if="doc.featImgUrl"
          />
          <div class="prose xl:prose-xl prose-invert prose-yellow relative">
            <ContentRenderer :value="doc" />
            <!-- <div
              class="flex border-2 sticky bottom-5 items-center rounded-lg px-5 py-2 border-gray-500/10 bg-[#141726]"
            >
              <span class="text-xl font-semibold"> You liked it? </span>
              <div class="flex gap-2 ml-auto">
                <IconButton>
                  <Icon name="heroicons:share" size="1.75em" />
                </IconButton>
                <IconButton>
                  <Icon name="heroicons:heart" size="1.75em" />
                </IconButton>
                <IconButton>
                  <Icon name="heroicons:bookmark" size="1.75em" />
                </IconButton>
              </div>
            </div> -->
          </div>
        </article>
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
      </main>
    </template>
    <template #not-found>
      <section
        class="py-32 md:py-64 px-5 md:px-20 xl:px-0 min-h-screen relative w-full"
      >
        <div
          class="max-w-3xl flex items-center justify-center w-full h-fit mb-32 mx-auto relative z-10"
        >
          <div class="flex">
            <div class="text-center">
              <p class="text-sm font-medium text-yellow-500">404 error</p>
              <h1
                class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"
              >
                Page not found
              </h1>
              <p class="mt-4 text-gray-500 dark:text-gray-400">
                Sorry, the page you are looking for doesn't exist.
              </p>
              <NuxtLink to="/">
                <AppButton
                  class="bg-[#00FF94] text-black text-lg font-medium px-4 mt-10 py-2.5 rounded"
                >
                  <Icon
                    name="heroicons:arrow-left"
                    size="1.25em"
                    class="mr-2"
                  />
                  Back to Home
                </AppButton>
              </NuxtLink>
            </div>
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
  </ContentDoc>
</template>