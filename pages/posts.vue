<template>
  <div>
    <h1 class="text-4xl font-bold mt-16">جميع المقالات</h1>
    <div class="mt-12">
      <ul>
        <li
          v-for="category of categories[0].categories"
          :key="category"
          @click="updateCategories(category)"
          class="inline ml-2 font-bold text-sm px-2 py-1 rounded-md cursor-pointer"
          :class="
            isSelected(category)
              ? 'bg-lightBlue-400 text-background'
              : 'bg-lightBlue-300 bg-opacity-100 hover:bg-lightBlue-400 text-background transition'
          "
        >
          {{ category }}
        </li>
      </ul>
    </div>
    <SearchInput :categories="currentCategories" class="mt-12" />
  </div>
</template>

<script>
import SearchInput from "../components/SearchInput.vue";
export default {
  components: {
    SearchInput,
  },
  data() {
    return {
      currentCategories: [],
    };
  },
  async asyncData({ $content, app }) {
    const categories = await $content(`${app.i18n.locale}/posts`)
      .only(["categories"])
      .fetch();

    return { categories };
  },
  head() {
    return {
      title: this.getLocalDateString === "ar" ? "جميع المقالات" : "posts",
    };
  },
  computed: {
    getLocalDateString() {
      return this.$i18n.locale;
    },
  },
  methods: {
    updateCategories(category) {
      var index = this.currentCategories.indexOf(category);

      if (index === -1) {
        this.currentCategories.push(category);
      } else {
        this.currentCategories.splice(index, 1);
      }
    },
    isSelected(cat) {
      return this.currentCategories.includes(cat);
    },
  },
};
</script>
