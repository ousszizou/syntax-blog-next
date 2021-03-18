<template>
  <div>
    <h1 class="text-4xl font-bold mt-16">
      منشورات تحت الوسم
      <span class="font-bold text-blue-400 underline">{{ tag }}</span>
    </h1>
    <div class="mt-12">
      <div
        class="text-red-500 text-center text-2xl px-1 py-2"
        v-if="posts.length === 0"
      >
        لم يتم العثور على أي منشور تحت الوسم
        <span class="font-bold">{{ tag }}</span
        >.
      </div>
      <ul v-else>
        <li v-for="post of posts" :key="post" class="py-2 hover:text-blue-400">
          <NuxtLink
            :to="{
              name: `post-slug___${getLocalDateString}`,
              params: { slug: post.slug },
            }"
          >
            <span class="inline-block align-middle">&#8226;</span>
            {{ post.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, app }) {
    const posts = await $content(`${app.i18n.locale}/posts`)
      .where({ tags: { $contains: params.tag } })
      .only(["title", "slug"])
      .sortBy("createdAt", "desc")
      .fetch();
    return { posts };
  },
  head(context) {
    const tag = context.$route.params.tag;
    const title_ar = `منشورات تحت الوسم "${tag}"`;
    const title_en = `posts by tag ${tag}`;
    return {
      title: this.getLocalDateString === "ar" ? title_ar : title_en,
    };
  },
  computed: {
    getLocalDateString() {
      return this.$i18n.locale;
    },
    tag(context) {
      return context.$route.params.tag;
    },
  },
};
</script>
