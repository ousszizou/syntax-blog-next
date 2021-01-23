<template>
  <nuxt />
</template>
<script>
export default {
  computed: {
    getLocalDateString() {
      return this.$i18n.locale;
    },
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title:
        this.getLocalDateString === "ar" ? "صفحة غير موجودة" : "page not found",
    };
  },
};
</script>
