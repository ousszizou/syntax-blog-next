<template>
  <div
    class="bg-blue-400 hover:bg-blue-500 transition-colors duration-300 rounded-md p-4 inline-block"
  >
    <p class="box flex items-center">
      <info-icon
        size="30"
        class="inline-block"
        :class="$dir() == 'rtl' ? 'ml-3' : 'mr-3'"
      ></info-icon>
      <slot name="info-box"></slot>
    </p>
  </div>
</template>

<script>
import { InfoIcon } from "vue-feather-icons";

export default {
  components: {
    InfoIcon,
  },
};
</script>

<style scoped>
.nuxt-content p.box {
  @apply text-xl text-background mb-0 !important;
}
</style>
