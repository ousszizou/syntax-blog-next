<template>
  <div class="inline-block relative">
    <button>
      <GlobeIcon
        class="inline-block align-middle"
        v-closable="closeDropdwonMenu"
        @click="isDropdwonMenuVisible = !isDropdwonMenuVisible"
      />
    </button>
    <div
      class="absolute px-6 w-44 py-4 rounded-bl rounded-tr rounded-tl-2xl rounded-br-2xl mt-4 shadow-xl bg-background"
      :class="isDropdwonMenuVisible ? 'block' : 'hidden'"
    >
      <nuxt-link
        class="flex justify-between w-full items-center"
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        ><span>{{ $t(`locales.${locale.name}`) }}</span
        ><gb-flag :code="locale.flag" size="small" class="mr-4" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { GlobeIcon } from "vue-feather-icons";
export default {
  components: {
    GlobeIcon,
  },
  data() {
    return {
      isDropdwonMenuVisible: false,
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
  methods: {
    closeDropdwonMenu() {
      this.isDropdwonMenuVisible = false;
    },
  },
};
</script>

<style scoped>
button {
  outline: none !important;
}
</style>
