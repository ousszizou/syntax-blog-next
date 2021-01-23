<template>
  <div>
    <p class="mt-16 sm:mt-8 text-lg sm:text-2xl md:text-3xl">
      <q>
        {{ $t("global.quote") }} -
        <span
          class="font-bold text-blue-500 dark:text-blue-200 transition-colors duration-700 ease-in-out"
          >{{ $t("global.quote-auth") }}</span
        >
      </q>
    </p>
    <TheNewsLetterCard />
    <LatestPosts :posts="posts" />
  </div>
</template>

<script>
import TheNewsLetterCard from "../components/TheNewsLetterCard.vue";
import LatestPosts from "../components/LatestPosts.vue";
export default {
  components: {
    TheNewsLetterCard,
    LatestPosts,
  },
  async asyncData({ $content, params, app }) {
    const posts = await $content(`${app.i18n.locale}/posts`)
      .only(["title", "slug", "createdAt"])
      .sortBy("createdAt", "desc")
      .limit(5)
      .fetch();
    return { posts };
  },
  head() {
    return {
      title: this.getLocalDateString === "ar" ? "الرئيسية" : "Home",
    };
  },
  computed: {
    getLocalDateString() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style></style>
