<template>
  <div class="layout" :dir="$dir()">
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
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
      titleTemplate: `%s - ${
        this.getLocalDateString === "ar" ? "مدونة سينتاكس" : "Syntax Blog"
      }`,
    };
  },
};
</script>

<style>
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
