<template>
  <section
    class="w-full min-h-screen flex relative py-32 px-5 md:px-20 xl:px-0"
  >
    <div
      v-motion-slide-bottom
      class="max-w-3xl w-full h-fit mx-auto my-auto relative z-10"
    >
      <div
        class="relative mb-7 w-[117px] h-[117px] rounded-full overflow-hidden"
      >
        <div class="absolute w-full h-full bg-transparent z-20"></div>
        <NuxtImg
          src="/aaafd1f5-7b36-4f98-b2c6-b6784a0df7b3.webp"
          width="117"
          height="117"
          alt="me"
          class="absolute -bottom-1.5 z-10"
        />
        <div
          class="from-blue-600 -rotate-45 to-transparent absolute top-0 left-0 w-full h-full bg-gradient-to-b"
        ></div>
      </div>
      <h3 class="text-2xl">
        Hi, I am
        <span class="italic font-bold underline underline-offset-2"
          >Aryabh</span
        >
      </h3>
      <div
        class="mt-4 flex items-center gap-3 text-3xl md:text-4xl lg:text-6xl"
      >
        <div
          class="w-8 md:w-16 h-8 md:h-16 text-black bg-[#00FF94] rounded flex items-center justify-center text-2xl md:text-4xl font-black"
        >
          A
        </div>
        <span class="font-black"
          >Full Stack <span class="font-light">developer</span>,</span
        >
      </div>
      <div
        class="mt-4 flex items-center gap-3 text-3xl md:text-4xl lg:text-6xl"
      >
        <div
          class="w-8 md:w-16 h-8 md:h-16 text-black bg-yellow-500 rounded flex items-center justify-center text-2xl md:text-4xl font-black"
        >
          &
        </div>
        <span class="font-black"
          >UI <span class="font-light">designer</span>,</span
        >
      </div>
      <div class="mt-14 flex items-center gap-3 text-3xl md:text-6xl">
        <span class="font-black ml-auto"
          ><span class="font-semibold text-2xl pr-2 inline-block"
            >~ hailing from</span
          >
          <span class="border-b-4 ml-1">India</span></span
        >
      </div>
      <div class="mt-14 flex items-center gap-3 text-6xl">
        <NuxtLink
          to="/contact"
          class="bg-[#00FF94] duration-200 hover:opacity-70 text-black text-xl font-medium px-6 py-2.5 rounded"
        >
          Get in touch
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="text-xl font-medium ml-5 hover:border-white border-transparent border-b-2 duration-200"
        >
          About me
        </NuxtLink>
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