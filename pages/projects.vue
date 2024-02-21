<script setup lang="ts">
const { data } = await useAsyncData("my-projects", () =>
  queryContent("/projects").sort({ order: 1 }).find()
);
</script>
<template>
  <section
    class="py-32 md:py-64 px-5 md:px-20 xl:px-0 min-h-screen relative w-full"
  >
    <div class="max-w-3xl w-full h-fit mb-32 mx-auto relative z-10">
      <div v-motion-slide-bottom>
        <h1 class="text-6xl font-black mb-2">Projects</h1>
        <p class="text-gray-500">
          My codes are mostly open-source, repos are available on my github.
        </p>
        <div class="flex gap-3 items-center mt-5">
          <a
            v-if="$config.public.GITHUB_URL"
            target="_blank"
            :href="$config.public.GITHUB_URL"
            class="p-2 duration-300 cursor-pointer rounded-full border border-gray-500/20 hover:bg-white/10"
          >
            <Icon name="mdi:github" size="1.75em" />
          </a>
        </div>
      </div>
      <div class="flex flex-col gap-10 mt-20" v-motion-fade>
        <div
          v-for="project in data"
          :key="project.name"
          class="flex rounded-xl border-gray-500/50 border-2 flex-col"
        >
          <div
            class="flex gap-3 items-center p-4 justify-start border-b-2 border-gray-500/50"
          >
            <NuxtImg
              v-if="project.image"
              :src="project.image"
              width="48"
              height="48"
            />
            <h3 class="text-xl font-semibold">
              {{ project.title }}
            </h3>
            <div class="ml-auto flex items-center gap-3">
              <NuxtLink v-if="project.url" :href="project.url" target="_blank">
                <IconButton>
                  <Icon name="mdi:eye" size="1.75em" />
                </IconButton>
              </NuxtLink>
              <NuxtLink
                v-if="project.github"
                :href="project.github"
                target="_blank"
              >
                <IconButton>
                  <Icon name="mdi:github" size="1.75em" />
                </IconButton>
              </NuxtLink>
            </div>
          </div>
          <div class="p-4">
            <p class="text-lg">{{ project.description }}</p>
            <div class="grid mt-4 grid-cols-3">
              <div v-if="project.languages">
                <h4
                  class="text-lg font-semibold text-yellow-500 underline mb-4"
                >
                  languages
                </h4>
                <div class="flex flex-wrap gap-3">
                  <div
                    v-for="language in project.languages"
                    class="bg-gray-500/50 px-3 rounded-full py-1"
                    :key="language"
                  >
                    {{ language }}
                  </div>
                </div>
              </div>
              <div v-if="project.frameworks">
                <h4
                  class="text-lg font-semibold text-yellow-500 underline mb-4"
                >
                  frameworks
                </h4>
                <div class="flex flex-wrap gap-3">
                  <div
                    v-for="framework in project.frameworks"
                    class="bg-gray-500/50 px-3 rounded-full py-1"
                    :key="framework"
                  >
                    {{ framework }}
                  </div>
                </div>
              </div>
              <div v-if="project.tools">
                <h4
                  class="text-lg font-semibold text-yellow-500 underline mb-4"
                >
                  tools
                </h4>
                <div class="flex flex-wrap gap-3">
                  <div
                    v-for="tool in project.tools"
                    class="bg-gray-500/50 px-3 rounded-full py-1"
                    :key="tool"
                  >
                    {{ tool }}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  