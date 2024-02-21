<script lang="ts" setup>
const { data } = await useAsyncData("my-designs", () =>
  queryContent("/designs").sort({ order: 1 }).find()
);
const dribbbleUrl = process.env.DRIBBBLE_URL;
</script>
<template>
  <section
    class="py-32 md:py-64 px-5 md:px-20 xl:px-0 min-h-screen relative w-full"
  >
    <div class="max-w-3xl w-full h-fit mb-32 mx-auto relative z-10">
      <div v-motion-slide-bottom>
        <h1 class="text-6xl font-black mb-2">Designs</h1>
        <p class="text-gray-500">
          I mostly use Figma as my go-to tool for UI designing.
        </p>
        <div class="flex gap-3 items-center mt-5">
          <span
            class="p-2 duration-300 cursor-pointer rounded-full border-gray-500/20 bg-white"
          >
            <Icon name="logos:figma" size="1.75em" />
          </span>
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
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-6 pt-20"
        v-motion-fade
      >
        <div
          v-for="design in data"
          :key="design.name"
          class="fle flex-col max-w-sm"
        >
          <div
            class="relative group max-w-sm h-[280px] w-full overflow-hidden border border-gray-500/50 rounded-xl flex items-center justify-center"
          >
            <NuxtImg
              :src="design.featImg"
              width="320"
              class="object-cover rounded-lg"
            />
            <div
              class="absolute invisible group-hover:visible group-hover:opacity-100 opacity-0 duration-200 w-full top-0 left-0 h-full bg-black/30 backdrop-blur flex items-center justify-center"
            >
              <NuxtLink
                target="_blank"
                :to="design.dribbbleURL"
                class="hover:bg-red-600 hover:text-white duration-200 px-4 rounded-full py-2 font-semibold bg-white text-black"
              >
                View on Dribbble
              </NuxtLink>
            </div>
          </div>
          <NuxtLink
            target="_blank"
            :to="design.dribbbleURL"
            class="mt-2 font-semibold hover:text-yellow-500 underline-offset-8 underline text-lg flex items-center px-5 group"
          >
            {{ design.name }}
            <Icon
              name="uil:external-link-alt"
              class="ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 duration-200"
            />
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