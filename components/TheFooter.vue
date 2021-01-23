<template>
  <footer class="mt-32 mb-12">
    <div class="flex justify-center items-center mb-8">
      <NuxtLink
        :to="{ name: `about___${getLocalDateString}` }"
        class="inline-block align-middle mx-2 text-sm sm:text-xl"
        >{{ $t("footer.about") }}</NuxtLink
      >
      <span
        class="font-bold text-blue-500 dark:text-blue-200 transition-colors duration-700 ease-in-out text-sm sm:text-xl"
        >|</span
      >
      <NuxtLink
        :to="{ name: `privacy-policy___${getLocalDateString}` }"
        class="inline-block align-middle mx-2 text-sm sm:text-xl"
        >{{ $t("footer.privacy") }}</NuxtLink
      >
    </div>
    <div
      class="flex justify-around items-center w-1/2 mx-auto"
      :class="$dir() == 'rtl' ? 'flex-row-reverse' : 'flex-row'"
    >
      <a href="https://nuxtjs.org/" :title="$t('logos.nuxt')" target="_blank"
        ><NuxtLogo class="w-8 h-8 order-4"
      /></a>
      <a
        href="https://tailwindcss.com/"
        :title="$t('logos.tailwind')"
        target="_blank"
        ><TailwindcssLogo class="w-8 h-8 order-3"
      /></a>
      <a
        href="https://github.com/ousszizou"
        :title="$t('logos.github')"
        target="_blank"
        ><GithubLogo class="w-8 h-8 order-2"
      /></a>
      <a
        href="https://www.netlify.com/"
        :title="$t('logos.netlify')"
        target="_blank"
        ><NetlifyLogo class="w-8 h-8 order-1"
      /></a>
    </div>
  </footer>
</template>

<script>
import NuxtLogo from "./NuxtLogo.vue";
import GithubLogo from "./GithubLogo.vue";
import NetlifyLogo from "./NetlifyLogo.vue";
import TailwindcssLogo from "./TailwindcssLogo.vue";
export default {
  components: {
    NuxtLogo,
    GithubLogo,
    NetlifyLogo,
    TailwindcssLogo,
  },
  computed: {
    getLocalDateString() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style></style>
