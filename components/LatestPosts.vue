<template>
  <div>
    <div class="mt-20">
      <h2 class="text-lg sm:text-2xl md:text-4xl font-bold inline-block">
        <coffee-icon class="inline ml-3 w-4"></coffee-icon>آخر المقالات
      </h2>
      <NuxtLink
        to="/posts"
        class="inline-block text-sm mx-3 p-1 rounded bg-gray-100 dark:bg-tgray-900 px-2 py-1 transition-colors duration-700 text-gray-700 dark:text-gray-200"
        >شاهد الكل</NuxtLink
      >
      <div class="mt-6">
        <ul>
          <li
            class="py-3 px-4 hover:bg-gray-100 dark:hover:bg-tgray-900 rounded-md"
            v-for="post of posts"
            :key="post.slug"
          >
            <NuxtLink
              :to="{
                name: `post-slug___${getLocalDateString}`,
                params: { slug: post.slug },
              }"
            >
              <div class="flex">
                <div>
                  <time
                    class="inline-block font-normal mx-3 text-xs sm:text-sm"
                    >{{ post.createdAt | formatDate(getLocalDateString) }}</time
                  >
                  <h3
                    class="inline-block font-bold text-sm sm:text-lg md:text-2xl"
                  >
                    {{ post.title }}
                  </h3>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { CoffeeIcon } from "vue-feather-icons";
export default {
  props: ["posts"],
  components: {
    CoffeeIcon,
  },
  filters: {
    formatDate(date, dateString) {
      let options = null;
      if (new Date(date).getFullYear() == new Date().getFullYear()) {
        options = { month: "long", day: "numeric" };
      } else {
        options = { year: "numeric", month: "long", day: "numeric" };
      }
      return new Date(date).toLocaleDateString(dateString, options);
    },
  },
  computed: {
    getLocalDateString() {
      return this.$i18n.locale;
    },
  },
};
</script>
