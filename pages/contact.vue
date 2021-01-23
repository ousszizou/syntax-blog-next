<template>
  <div>
    <h1 class="text-4xl font-bold mt-16">اتصل بنا</h1>
    <div class="mt-6 contact">
      <p>
        لديك إقتراحات لتحسين المدونة ؟ لديك ملاحظات حول المدونة و محتواها ؟ تود
        إقتراح بعض المواضيع التي تتطلع إلى وجودها في مدونة سينتاكس ؟ لديك أسئلة
        او إستفسارات عامة ؟ نحن أذن صاغية بإذن الله .
      </p>
      <p>يُمكنك التواصل معنا من خلال :</p>
      <ul class="mt-4 font-bold">
        <li class="my-2">
          - البريد الإلكتروني :
          <a href="mailto:example@gmail.com">example@gmail.com</a>
        </li>
        <li class="my-2">
          - حسابنا على تويتر :
          <a href="/">syntaxBlog</a>
        </li>
        <li class="my-2">
          - حسابنا على فيسبوك :
          <a href="/">syntaxBlog</a>
        </li>
      </ul>
    </div>
    <Support />
  </div>
</template>

<script>
import Support from "../components/Support.vue";
export default {
  components: {
    Support,
  },
  head() {
    return {
      title: this.getLocalDateString === "ar" ? "اتصل بنا" : "contact us",
    };
  },
  computed: {
    getLocalDateString() {
      return this.$i18n.locale;
    },
  },
};
</script>

<style>
.contact p {
  @apply text-xl mb-4 leading-10;
}
.contact a {
  @apply font-normal underline text-blue-400 hover:text-blue-500;
}
</style>
