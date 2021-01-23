<template>
  <button
    @click="handleClick"
    aria-label="Color Mode Picker"
    title="Color Mode Picker"
  >
    <slot :dark="isDarkMode" />
  </button>
</template>

<script>
export const DARK_MODE = "dark";
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    handleClick() {
      const htmlEl = document.getElementsByTagName("HTML")[0];
      const hasDarkMode = htmlEl.classList.contains(DARK_MODE);
      // Toggle dark mode on click.
      return this.toggleDarkMode(!hasDarkMode);
    },
    toggleDarkMode(shouldBeDark) {
      const htmlEl = document.getElementsByTagName("HTML")[0];
      shouldBeDark ? htmlEl.classList.remove("light") : htmlEl.classList.add("light")
      htmlEl.classList.toggle(DARK_MODE, shouldBeDark);
      this.isDarkMode = shouldBeDark;
      this.writeToStorage(shouldBeDark);
      return shouldBeDark;
    },
    hasInStorage() {
      const check = process.browser ? localStorage.getItem(DARK_MODE) : false;
      return check !== null;
    },
    writeToStorage(prefersDark) {
      process.browser
        ? localStorage.setItem(DARK_MODE, prefersDark ? "true" : "false")
        : false;
    },
    getFromStorage() {
      return process.browser
        ? localStorage.getItem(DARK_MODE) === "true"
          ? true
          : false
        : false;
    },
  },
  mounted() {
    if (this.hasInStorage()) {
      this.toggleDarkMode(this.getFromStorage());
    }
  },
};
</script>

<style scoped>
button {
  outline: none !important;
}
</style>
