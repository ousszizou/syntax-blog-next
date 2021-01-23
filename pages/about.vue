<template>
  <div>
    <h1 class="text-4xl font-bold mt-16">{{ page.title }}</h1>
    <nuxt-content class="mt-6" :document="page" />
    <Support />
  </div>
</template>

<script>
import Support from "../components/Support.vue";
export default {
  components: {
    Support,
  },
  async asyncData({ $content, app }) {
    const page = await $content(`${app.i18n.locale}/about`).fetch();

    return { page };
  },
  head() {
    return {
      title: this.getLocalDateString === "ar" ? "من نحن؟" : "about us",
    };
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
</style>
