<template>
  <div class="mt-16">
    <div class="text-center">
      <h1 class="text-4xl mb-6 font-bold">{{ post.title }}</h1>
      <div>
        <span class="block mb-2">
          بتاريخ
          <time class="font-bold mx-3 text-sm">{{
            post.updatedAt | formatDate(getLocalDateString)
          }}</time>
        </span>
        <span class="block">
          من طرف
          <NuxtLink to="/" class="font-bold text-md underline">{{
            post.author
          }}</NuxtLink>
        </span>
        <div class="mt-4">
          <span
            class="rounded bg-gray-100 dark:bg-tgray-900 px-2 py-1 transition-colors duration-700 text-gray-700 dark:text-gray-200 text-sm font-bold mx-1"
            v-for="tag in post.tags"
            :key="tag"
          >
            {{ tag }}
          </span>
        </div>
        <div class="mt-16" v-if="post.demoUrl || post.codeUrl">
          <a
            class="mx-2 px-8 bg-yellow-400 hover:bg-yellow-500 text-background transition-colors duration-700 rounded"
            :href="post.demoUrl"
            v-if="post.demoUrl"
            >معاينة</a
          >
          <a
            class="mx-2 px-8 bg-red-400 hover:bg-red-500 text-background transition-colors duration-700 rounded"
            :href="post.codeUrl"
            v-if="post.codeUrl"
            >الكود</a
          >
        </div>
        <div class="mt-16 text-right" v-if="post.toc.length">
          <h3 class="font-bold text-2xl">
            <box-icon class="inline-block"></box-icon> جدول المحتويات
          </h3>
          <ul class="mt-3 px-8">
            <li
              class="text-base my-2"
              :class="{
                'mx-2': link.depth === 3,
              }"
              v-for="link of post.toc"
              :key="link.id"
            >
              <div
                class="w-1 h-1 bg-gray-700 dark:bg-white rounded-full inline-block transition-colors duration-700"
              ></div>
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nuxt-content class="mt-24" :document="post" />
    <Support />
  </div>
</template>

<script>
import { BoxIcon, Link2Icon } from "vue-feather-icons";
import Support from "../../components/Support.vue";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
export default {
  components: {
    BoxIcon,
    Link2Icon,
    Support,
  },
  async asyncData({ $content, params, app }) {
    const post = await $content(
      `${app.i18n.locale}/posts`,
      params.slug
    ).fetch();

    return { post };
  },
  filters: {
    formatDate(date, dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
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

<style>
.nuxt-content p {
  @apply text-xl mb-4 leading-10;
}
.nuxt-content a {
  @apply font-normal underline text-blue-400 hover:text-blue-500;
}
.nuxt-content h2 {
  @apply font-bold text-2xl my-6;
}
.nuxt-content h3 {
  @apply font-bold text-xl my-6;
}
.nuxt-content h4 {
  @apply font-bold text-lg my-6;
}
.icon.icon-link {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
  -webkit-mask-image: url("~assets/svg/link-2.svg");
  mask-image: url("~assets/svg/link-2.svg");
  @apply mx-1 bg-gray-900 dark:bg-gray-100 transition-colors duration-700 align-middle;
}

/* change highlight selection color (prismJs) */
code[class*="language-"]::-moz-selection,
pre[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection,
pre[class*="language-"] ::-moz-selection {
  background: #ffee5b !important;
}

code[class*="language-"]::selection,
pre[class*="language-"]::selection,
code[class*="language-"] ::selection,
pre[class*="language-"] ::selection {
  background: #ffee5b !important;
}

code[class*="language-"],
pre[class*="language-"] {
  line-height: 1.8 !important;
  border-radius: 7px;
  text-align: left;
  direction: ltr !important;
  font-size: 20px !important;
  @apply shadow-md;
}
</style>
