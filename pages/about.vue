<script setup lang="ts">
const { data } = await useAsyncData("my-projects", () =>
  queryContent("/projects").sort({ order: 1 }).find()
);
</script>
<template>
  <section
    class="min-h-screen w-full relative py-32 md:py-64 px-5 md:px-20 xl:px-0"
  >
    <div
      class="max-w-3xl w-full h-fit mb-32 mx-auto relative z-10"
      v-motion-slide-bottom
    >
      <h1 class="text-6xl font-black mb-2">About Me</h1>
      <p class="text-gray-500">
        Hello, I am <span class="text-white">Aryabh</span>, a full-stack
        developer with a keen interest in developing clean & intuitive UIs.
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
    </div>
    <div v-motion-fade>
      <div class="max-w-3xl w-full mx-auto relative z-10">
        <div
          class="w-16 h-16 flex items-center justify-center rounded-full -top-4 left-0 -ml-[110px] z-50 absolute"
        >
          <div class="bg-[#141726] absolute w-full h-full rounded-full"></div>
          <div class="bg-white/25 absolute w-full h-full rounded-full"></div>
          <div class="bg-white/50 absolute w-3/4 h-3/4 rounded-full"></div>
          <div class="bg-white absolute w-2/4 h-2/4 rounded-full"></div>
        </div>
        <div
          class="w-1 absolute h-full from-transparent via-white to-tranparent bg-gradient-to-b rounded-full left-0 -ml-20 top-10"
        ></div>
        <div class="flex-col flex gap-4">
          <h4 class="text-2xl font-medium">
            tech stack/tools I generally use:
          </h4>
          <div class="flex flex-1 mt-10 flex-wrap gap-6">
            <div
              class="flex gap-4 mt-8 items-center relative border-2 border-gray-400/40 w-fit py-2 px-3 rounded-xl"
            >
              <span class="absolute top-0 -mt-6 bg-gray-400/20 px-2 rounded-t">
                /front-end
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:react" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[50%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >React.js</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:vue" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[25%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >Vue.js</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:nextjs-icon" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[25%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >Next.js</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:nuxt-icon" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[25%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >Nuxt.js</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:tailwindcss-icon" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[50%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >Tailwind</span
                >
              </span>
            </div>
            <div
              class="flex items-center gap-4 mt-8 relative border-2 border-gray-400/40 w-fit py-2 px-3 rounded-xl"
            >
              <span class="absolute top-0 -mt-6 bg-gray-400/20 px-2 rounded-t">
                /back-end
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:laravel" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[40%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >Laravel</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:fastapi-icon" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[50%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >FastAPI</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="skill-icons:expressjs-dark" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[60%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >Express.js</span
                >
              </span>
              <span class="bg-black p-1 group rounded-lg relative">
                <Icon name="devicon-plain:fastify" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[50%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >Fastify</span
                >
              </span>
              <span class="bg-black p-1 group rounded-lg relative">
                <Icon name="logos:hono" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[50%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >Hono.js</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:flask" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[50%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >Flask</span
                >
              </span>
            </div>
            <div
              class="flex gap-4 mt-8 items-center relative border-2 border-gray-400/40 w-fit py-2 px-3 rounded-xl"
            >
              <span class="absolute -mt-6 top-0 bg-gray-400/20 px-2 rounded-t">
                /cms
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:wordpress-icon" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[70%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >Wordpress</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="devicon:ghost" size="2em" />
                <span
                  class="absolute group-hover:-bottom-8 left-0 px-2 rounded-md -ml-[70%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >Ghost.org</span
                >
              </span>
            </div>
            <div
              class="flex gap-4 mt-8 items-center relative border-2 border-gray-400/40 w-fit py-2 px-3 rounded-xl"
            >
              <span class="absolute -mt-6 top-0 bg-gray-400/20 px-2 rounded-t">
                /db
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="skill-icons:mongodb" size="2em" />
                <span
                  class="absolute group-hover:-bottom-10 left-0 px-2 rounded-md -ml-[70%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-14"
                  >MongoDB</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:mysql-icon" size="2em" />
                <span
                  class="absolute group-hover:-bottom-10 left-0 px-2 rounded-md -ml-[40%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-14"
                  >MySQL</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:postgresql" size="2em" />
                <span
                  class="absolute group-hover:-bottom-10 left-0 px-2 rounded-md -ml-[70%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-14"
                  >PostgreSQL</span
                >
              </span>
            </div>
            <div
              class="flex gap-4 mt-8 items-center relative border-2 border-gray-400/40 w-fit py-2 px-3 rounded-xl"
            >
              <span class="absolute -mt-6 top-0 bg-gray-400/20 px-2 rounded-t">
                /languages
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:python" size="2em" />
                <span
                  class="absolute group-hover:-bottom-10 left-0 px-2 rounded-md -ml-[40%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-14"
                  >Python</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:php" size="2em" />
                <span
                  class="absolute group-hover:-bottom-10 left-0 px-2 rounded-md -ml-[10%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-14"
                  >PHP</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:javascript" size="2em" />
                <span
                  class="absolute group-hover:-bottom-10 left-0 px-2 rounded-md -ml-[70%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-14"
                  >Javascript</span
                >
              </span>
            </div>
            <div
              class="flex gap-4 mt-8 items-center relative border-2 border-gray-400/40 w-fit py-2 px-3 rounded-xl"
            >
              <span class="absolute -mt-6 top-0 bg-gray-400/20 px-2 rounded-t">
                /tools
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="devicon:vscode" size="2em" />
                <span
                  class="absolute group-hover:-bottom-10 left-0 px-2 rounded-md -ml-[50%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-14"
                  >VScode</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:github-icon" size="2em" />
                <span
                  class="absolute group-hover:-bottom-10 left-0 px-2 rounded-md -ml-[30%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-14"
                  >Github</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:typescript-icon" size="2em" />
                <span
                  class="absolute group-hover:-bottom-10 left-0 px-2 rounded-md -ml-[70%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-14"
                  >Typescript</span
                >
              </span>
              <span class="bg-white p-1 group rounded-lg relative">
                <Icon name="logos:figma" size="2em" />
                <span
                  class="absolute group-hover:-bottom-10 left-0 px-2 rounded-md -ml-[30%] bg-black text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300 -bottom-10"
                  >Figma</span
                >
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-3xl w-full pt-48 relative z-10">
        <div
          class="w-16 h-16 flex items-center justify-center rounded-full top-44 left-0 -ml-[110px] z-50 absolute"
        >
          <div class="bg-[#141726] absolute w-full h-full rounded-full"></div>
          <div class="bg-white/25 absolute w-full h-full rounded-full"></div>
          <div class="bg-white/50 absolute w-3/4 h-3/4 rounded-full"></div>
          <div class="bg-white absolute w-2/4 h-2/4 rounded-full"></div>
        </div>
        <div
          class="w-1 absolute top-0 h-full from-transparent via-white to-transparent bg-gradient-to-b rounded-full left-0 -ml-20"
        ></div>
        <h4 class="text-2xl font-medium">
          things i keep in-mind while working:
        </h4>
        <div class="mt-20">
          <h2
            class="mb-2 block font-semibold underline underline-offset-4 lg:mb-4 text-yellow-500"
          >
            Domain Knowledge
          </h2>
          <p
            class="mb-4 text-3xl font-black text-slate-700 lg:text-4xl dark:text-slate-200"
          >
            Research is the key
          </p>
          <p class="max-w-lg text-slate-600 dark:text-slate-400">
            Taking time to do a thorough research on the subject before starting
            to work a solution.
          </p>
        </div>
        <div class="mt-10">
          <h2
            class="mb-2 block font-semibold underline underline-offset-4 lg:mb-4 text-yellow-500"
          >
            User Experience
          </h2>
          <p
            class="mb-4 text-3xl font-black text-slate-700 lg:text-4xl dark:text-slate-200"
          >
            Awareness to Details
          </p>
          <p class="max-w-lg text-slate-600 dark:text-slate-400">
            Ease of Access, Consistent UI, Not to over-engineer things,
            Usability over Fancy Stuff and at the end - a better UX.
          </p>
        </div>
        <div class="mt-10">
          <h2
            class="mb-2 block font-semibold underline underline-offset-4 lg:mb-4 text-yellow-500"
          >
            Developer Experience
          </h2>
          <p
            class="mb-4 text-3xl font-black text-slate-700 lg:text-4xl dark:text-slate-200"
          >
            Mindful Development
          </p>
          <p class="max-w-lg text-slate-600 dark:text-slate-400">
            Maintain Code standards, Code readablity, Using STATE-OF-ART
            standards & technologies and lastly use techonologies, methods or
            packages with future proofing in-mind.
          </p>
        </div>
        <div class="mt-10">
          <h2
            class="mb-2 block font-semibold underline underline-offset-4 lg:mb-4 text-yellow-500"
          >
            Artistic Approch
          </h2>
          <p
            class="mb-4 text-3xl font-black text-slate-700 lg:text-4xl dark:text-slate-200"
          >
            Look like an ART
          </p>
          <p class="max-w-lg text-slate-600 dark:text-slate-400">
            Be it code or UI design both is your art, so make it not just look
            like one - it is one.
          </p>
        </div>
      </div>
      <div class="mx-auto max-w-3xl w-full pt-48 relative z-10">
        <div
          class="w-16 h-16 flex items-center justify-center rounded-full top-44 left-0 -ml-[110px] z-50 absolute"
        >
          <div class="bg-[#141726] absolute w-full h-full rounded-full"></div>
          <div class="bg-white/25 absolute w-full h-full rounded-full"></div>
          <div class="bg-white/50 absolute w-3/4 h-3/4 rounded-full"></div>
          <div class="bg-white absolute w-2/4 h-2/4 rounded-full"></div>
        </div>
        <div
          class="w-1 absolute top-0 h-full from-transparent via-white to-transparent bg-gradient-to-b rounded-full left-0 -mt-16 -ml-20"
        ></div>
        <h4 class="text-2xl font-medium">
          projects i am currently working on:
        </h4>
        <div
          class="mt-10 gap-8 grid grid-flow-row grid-cols-1 md:grid-cols-2 pb-20"
        >
          <div
            v-for="project in data"
            :key="project.title"
            class="flex shadow-xl shadow-black/50 flex-col bg-blue-950 gap-3 border rounded-lg p-4 border-blue-500/50 h-fit"
          >
            <NuxtImg
              v-if="project.image"
              width="64"
              height="64"
              :src="project.image"
            />
            <h2 class="text-2xl font-bold">{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <div class="flex gap-2 items-center">
              <NuxtLink
                :to="project.url"
                class="border border-gray-500/50 py-1 px-3 rounded-lg"
                >{{ project.urlTxt || "View Project" }}</NuxtLink
              >
              <NuxtLink
                :to="project.github"
                class="p-2 float-left -mb-16 -mr-6 md:-mr-10 hover:scale-110 duration-300 cursor-pointer rounded-full bg-white ml-auto"
              >
                <Icon name="logos:github-icon" size="1.75em" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-3xl w-full pt-32 relative z-10">
        <div
          class="w-16 h-16 flex items-center justify-center rounded-full top-28 left-0 -ml-[110px] z-50 absolute"
        >
          <div class="bg-[#141726] absolute w-full h-full rounded-full"></div>
          <div class="bg-white/25 absolute w-full h-full rounded-full"></div>
          <div class="bg-white/50 absolute w-3/4 h-3/4 rounded-full"></div>
          <div class="bg-white absolute w-2/4 h-2/4 rounded-full"></div>
        </div>
        <div
          class="w-1 absolute -top-20 h-full from-transparent via-white to-transparent bg-gradient-to-b rounded-full left-0 -ml-20"
        ></div>
        <h4 class="text-2xl font-medium">what they say about me:</h4>
        <div class="mt-20">
          <h2
            class="mb-2 block font-semibold underline underline-offset-4 lg:mb-4 text-yellow-500"
          >
            Freelance Client
          </h2>
          <p class="max-w-lg text-slate-600 dark:text-slate-400">
            "I highly recommend Aryabh for any software development project. He
            did an outstanding job on my project, going above and beyond to
            deliver excellent results. His attention to detail, expertise, and
            dedication to meeting my requirements were exceptional.
            Communication was excellent throughout the project, and they kept me
            informed every step of the way. I'm delighted with the final
            product, and I appreciate Aryabh's hard work and professionalism. I
            look forward to working with him again on future projects. Thank
            you!" -
            <b>Mark Nagy, UK</b>
          </p>
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