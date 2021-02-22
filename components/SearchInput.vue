<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="عن ماذا تبحث؟"
      class="my-4 border-2 p-6 w-4/5 focus:border-blue-500 outline-none rounded-md bg-background font-sans text-gray-700 dark:text-gray-200 transition-colors duration-700"
    />
    <span v-if="posts.length" class="font-black mr-4">{{ posts.length }}</span>
    <ul v-if="posts.length" class="mt-4">
      <li
        v-for="post of posts"
        :key="post.slug"
        class="py-2 hover:text-blue-400"
      >
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
</template>
<script>
export default {
  props: ["categories"],
  data() {
    return {
      searchQuery: "",
      posts: [],
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.getAllPosts();
        return;
      }
      this.posts = await this.$content(`${this.getLocalDateString}/posts`)
        .search("title", searchQuery)
        .fetch();
    },
    async categories(newValues) {
      if (newValues.length == 0) {
        this.getAllPosts();
        return;
      }
      this.posts = await this.$content(`${this.getLocalDateString}/posts`)
        .where({ categories: { $containsAny: newValues } })
        .sortBy("createdAt", "desc")
        .fetch();
    },
  },
  computed: {
    getLocalDateString() {
      return this.$i18n.locale;
    },
  },
  mounted() {
    this.getAllPosts();
  },
  methods: {
    async getAllPosts() {
      this.posts = await this.$content(`${this.getLocalDateString}/posts`)
        .sortBy("createdAt", "desc")
        .fetch();
    },
  },
};
</script>
