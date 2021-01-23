<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full lg:w-1/2 text-center">
      <frown-icon class="mx-auto mb-2"></frown-icon>
      <h1 class="mb-2" v-if="error.statusCode === 404">
        الصفحة التي تبحث عنها غير موجودة
      </h1>
      <h1 class="mb-2" v-else>حدث خطأ ما. جرب مرة أخرى</h1>
      <NuxtLink
        class="text-blue-500 font-bold"
        :to="{ name: `index___${getLocalDateString}` }"
        >إضغط هنا للعودة إلى الرئيسية</NuxtLink
      >
    </div>
  </div>
</template>

<script>
import { FrownIcon } from "vue-feather-icons";
export default {
  props: ["error"],
  layout: "error-layout",
  components: {
    FrownIcon,
  },
  computed: {
    getLocalDateString() {
      return this.$i18n.locale;
    },
  },
};
</script>
