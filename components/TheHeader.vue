<template>
  <headroom>
    <header
      class="block text-center sm:flex sm:justify-between sm:items-center h-20 w-full mt-8 md:w-base z-10 sm:mt-0 mx-auto mb-4 bg-background transition-colors duration-700 ease-in-out"
    >
      <NuxtLink
        :to="{ name: `index___${getLocalDateString}` }"
        class="relative inline-block"
      >
        <span class="brand block">{{ $t("global.blog") }}</span>
        <span class="brand-empty"></span>
      </NuxtLink>
      <div class="nav__links mt-6 sm:mt-0">
        <NuxtLink
          :to="{ name: `contact___${getLocalDateString}` }"
          class="inline-block align-middle mx-2 hover:text-gray-900 dark:hover:text-gray-100"
          >{{ $t("links.contact") }}</NuxtLink
        >
        <NuxtLink
          :to="{ name: `hire___${getLocalDateString}` }"
          class="inline-block align-middle mx-2 hover:text-gray-900 dark:hover:text-gray-100"
          >{{ $t("links.hire") }}</NuxtLink
        >
        <!-- <local-switcher class="mx-2" /> -->
        <color-mode-picker class="inline-block align-middle">
          <template slot="default" slot-scope="{ dark }">
            <MoonIcon v-if="dark" />
            <SunIcon v-else />
          </template>
        </color-mode-picker>
      </div>
    </header>
  </headroom>
</template>

<script>
import { MoonIcon, SunIcon } from "vue-feather-icons";
import { headroom } from "vue-headroom";
import ColorModePicker from "./ColorModePicker.vue";
// import LocalSwitcher from "./LocalSwitcher.vue";

export default {
  components: {
    MoonIcon,
    SunIcon,
    headroom,
    ColorModePicker,
    // LocalSwitcher,
  },
  computed: {
    getLocalDateString() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style>
.headroom {
  @apply bg-background transition-colors duration-700 ease-in-out pb-6 sm:pb-0;
}
.headroom--top {
  @apply shadow-none;
}
.headroom--not-top {
  @apply shadow-md w-full fixed !important transition-colors duration-700 ease-in-out px-4 md:px-0;
}
.headroom--pinned {
  @apply w-full;
}
.headroom > header > .nav__links {
  @apply text-gray-700 dark:text-gray-200 transition-colors duration-700 ease-in-out;
}
@screen sm {
  .headroom > header {
    margin: 0 auto 10px auto;
  }
}

.brand {
  padding: 4px 7px;
  border-radius: 7px;
  line-height: 1.9;
  @apply z-30 relative bg-tgray-700 dark:bg-tgray-50 text-background dark:text-background transition-all duration-300 ease-in;
}

.brand:hover {
  transform: translate(-5px, 5px);
}

.brand-empty {
  padding: 10px 15px;
  border-radius: 7px;
  transform: translate(-5px, 5px);
  line-height: 1.9;
  @apply z-20 block absolute w-full h-full top-0 left-0 border-2 border-solid	border-tgray-700 dark:border-tgray-50 transition-colors duration-300 ease-in-out;
}
.brand:hover::after {
  transform: translate(5px, -4px);
}
</style>
