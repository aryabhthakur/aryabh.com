<template>
  <section
    class="py-32 md:py-64 px-5 md:px-20 xl:px-0 min-h-screen relative w-full"
  >
    <div
      class="max-w-3xl flex items-center justify-center w-full h-fit mb-32 mx-auto relative z-10"
    >
      <div
        class="max-w-3xl w-full h-fit mb-32 mx-auto relative z-10"
        v-motion-slide-bottom
      >
        <h1 class="text-6xl font-black mb-2">Contact Me</h1>
        <p class="text-gray-500">
          How can I help? What do you wanna discuss? I am available anytime,
          through social media, e-mail, or phone number.
        </p>
        <div class="flex gap-3 items-center mt-5">
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
        <div class="mt-20">
          <h4 class="text-lg text-gray-500 font-medium">
            Just a friendly reminder that the information provided here is for
            business purposes only. If you have any questions, feel free to chat
            with me directly on my social media.
          </h4>
          <div class="mt-20">
            <h2
              class="mb-2 block font-semibold underline underline-offset-4 lg:mb-4 text-yellow-500"
            >
              Contact Address
            </h2>
            <p
              class="mb-4 text-3xl font-black text-slate-700 lg:text-4xl dark:text-slate-200"
            >
              Bhagalpur, India
              <Icon name="mdi:pin" class="rotate-45 text-red-600" />
            </p>
            <p class="max-w-lg text-gray-500 font-semibold">
              Timezone : <span class="text-white">GMT +5:30</span>
              <br />
              Email : <span class="text-white">aryabh@ssh.studio</span>
            </p>
          </div>
          <div class="mt-20">
            <h2
              class="mb-2 block font-semibold underline underline-offset-4 lg:mb-4 text-yellow-500"
            >
              Social Media Links
            </h2>
            <div class="flex gap-3">
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

<script lang="ts" setup>
</script>

<style>
</style>