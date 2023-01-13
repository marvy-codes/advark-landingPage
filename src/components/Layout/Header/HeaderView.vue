<template>
  <div
    class="mb-[40px] flex items-center justify-between md:my-4 md:mb-[160px]"
  >
    <div class="h-[27px] w-[127px] md:h-[41px] md:w-[184px]">
      <img src="../../../assets/advark.svg" alt="aardvark" />
    </div>
    <!-- desktop navigation -->
    <ul class="mx-auto hidden text-center md:block md:flex md:items-center">
      <li v-for="link in Links" :key="link.link" class="ml-5 lg:ml-14">
        <a :href="link.link">{{ link.name }}</a>
      </li>
    </ul>

    <div
      class="md:space-between hidden md:block md:flex md:flex-row-reverse md:items-center"
    >
      <div class="">
        <DappButtonLite />
      </div>
      <div class="hidden lg:flex">
        <img src="../../../assets/twitter.svg" alt="twitter" />
        <img src="../../../assets/discord.png" alt="discord" class="mx-4" />
      </div>
    </div>

    <div
      class="right-6 top-5 z-20 cursor-pointer text-3xl md:hidden"
      @click="MenuOpen()"
    >
      <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
    </div>
  </div>

  <!-- mobile navigation -->
  <div
    class="absolute top-0 bottom-0 h-screen h-screen w-full bg-[#151315] duration-700 ease-in lg:hidden z-10"
    :class="[open ? 'left-0' : 'left-[-100%]']"
  >
    <div class="mx-auto mt-7 h-[27px] w-[127px]">
      <img src="../../../assets/advark.svg" alt="aardvark" />
    </div>

    <ul class="mx-auto mt-28 text-center">
      <li
        v-for="link in Links"
        :key="link.link"
        class="mx-auto my-6 text-3xl font-semibold leading-10"
      >
        <a :href="link.link">{{ link.name }}</a>
      </li>
    </ul>

    <div class="mx-auto mt-28 text-center">
      <div class="">
        <DappButton />
      </div>
    </div>

    <div class="mx-auto mt-28 mb-8 flex justify-center text-center">
      <img
        src="../../../assets/twitter.svg"
        alt="twitter"
        class="h-[48px] w-[48px]"
      />
      <img
        src="../../../assets/discord.png"
        alt="discord"
        class="ml-4 h-[48px] w-[48px]"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import DappButton from '../Button/DappButton.vue';
import DappButtonLite from '../Button/DappButtonLite.vue';

export default {
  name: 'HeaderView',
  components: {
    DappButton,
    DappButtonLite,
  },
  setup() {
    let open = ref(false);
    let Links = [
      { name: 'About', link: '#' },
      { name: 'Features', link: '#' },
      { name: 'Contact us', link: '#' },
      { name: 'Docs', link: '#' },
    ];

    function MenuOpen() {
      open.value = !open.value;
    }
    return { Links, open, MenuOpen };
  },
};
</script>
