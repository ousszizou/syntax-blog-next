<template>
  <div>
    <h1 class="text-4xl font-bold mt-16">لديك عمل لنا؟</h1>
    <div class="my-6">
      <p class="leading-10">
        صاحب مشروع؟ لديك فكرة تود تجسيدها؟ تود أن نُوفر لك محتوى مثل الموجود على
        مدوتنا و قنواتنا التعليمية؟ يُرجــى ملىء النموذج أدناه و سنُعاود الإتصال
        بك في غضون يوم إلى يومين.
      </p>
    </div>
    <form action="#" method="post" class="flex my-6 justify-between flex-wrap">
      <div class="w-1/2 px-1">
        <input
          type="text"
          name="fullname"
          placeholder="أدخل إسمك الكامل"
          autocomplete="off"
          class="my-4 border-2 p-6 w-full focus:border-blue-500 outline-none rounded-md bg-tgray-100 dark:bg-gray-700 dark:bg-opacity-25 font-sans text-gray-700 dark:text-gray-200 transition-colors duration-700"
        />
      </div>
      <div class="w-1/2 px-1">
        <input
          type="email"
          name="email"
          placeholder="أدخل بريدك الإلكتروني"
          autocomplete="off"
          class="my-4 border-2 p-6 w-full focus:border-blue-500 outline-none rounded-md font-sans bg-tgray-100 dark:bg-gray-700 dark:bg-opacity-25 text-gray-700 dark:text-gray-200 transition-colors duration-700"
        />
      </div>
      <div class="w-full px-1">
        <textarea
          class="my-4 border-2 p-6 w-full focus:border-blue-500 outline-none rounded-md font-sans bg-tgray-100 dark:bg-gray-700 dark:bg-opacity-25 text-gray-700 dark:text-gray-200 transition-colors duration-700"
          name="subject"
          cols="30"
          rows="10"
          placeholder="كيف يُمكننا إفادتك؟"
        ></textarea>
      </div>
      <button
        type="submit"
        class="block align-middle relative border-2 transition-all duration-700 ease-in-out py-4 px-16 rounded-full w-1/2 text-2xl shadow-lg border-blue-400 hover:bg-background hover:text-blue-400 text-background mt-6 bg-blue-400 mx-auto transform hover:scale-105 font-bold"
      >
        أرسل
      </button>
    </form>
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
      title: this.getLocalDateString === "ar" ? "وظفنا" : "hire us",
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
</style>
