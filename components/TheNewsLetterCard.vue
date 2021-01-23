<template>
  <div
    class="mt-16 w-full border-2 p-10 rounded-md text-center bg-background font-sans text-gray-700 dark:text-gray-200 transition-colors duration-700 shadow-lg"
  >
    <h2 class="font-bold text-4xl">إشترك معنا</h2>
    <p class="mt-4">
      إنظم لقائمتنا البريدية لتصلك مواضيع موقعنا مباشرة إلى بريدك الإلكتروني.
    </p>
    <div class="mt-4">
      <form
        class="flex flex-col justify-center items-center"
        action="#"
        method="post"
      >
        <input
          type="email"
          name="email"
          placeholder="أدخل بريدك الإلكتروني"
          autocomplete="off"
          class="my-4 border-2 p-6 w-4/5 focus:border-blue-500 outline-none rounded-md bg-background font-sans text-gray-700 dark:text-gray-200 transition-colors duration-700"
        />
        <NuxtLink
          to="/subscribe"
          class="block align-middle relative mx-2 border-2 transition-colors duration-700 ease-in-out py-4 px-16 rounded-md text-2xl shadow-lg border-blue-400 mt-6 hover:bg-blue-400 group"
        >
          <span class="flex h-3 w-3 absolute top-0 right-0 -mt-1 -mr-1">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"
            ></span>
          </span>
          <span
            class="text-blue-500 dark:text-blue-400 group-hover:text-background transition-colors duration-700 ease-in-out"
          >
            {{ $t("global.subscribe") }}
          </span>
        </NuxtLink>
      </form>
    </div>
  </div>
</template>
