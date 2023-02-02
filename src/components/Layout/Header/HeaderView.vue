<template>
  <div
    class="fixed left-0 right-0 top-0 z-20 mx-auto h-[72px] bg-[#ffffff03] backdrop-blur-[22px]"
  >
    <div
      class="fixed top-0 left-0 right-0 z-20 mt-[0px] w-full max-w-screen-2xl px-[16px] sm:px-[100px] 2xl:mx-auto"
    >
      <div class="flex items-center justify-between py-4">
        <div class="h-[27px] w-[127px] md:h-[41px] md:w-[184px]">
          <a href="/"
            ><img src="../../../assets/advark.svg" alt="aardvark"
          /></a>
        </div>
        <!-- desktop navigation -->
        <ul class="mx-auto hidden text-center md:items-center lg:flex">
          <li v-for="link in Links" :key="link.link" class="ml-5 xl:ml-14">
            <a class="duration-900 transition ease-in" :href="link.link">{{
              link.name
            }}</a>
          </li>
        </ul>

        <div
          class="md:space-between hidden md:flex-row-reverse md:items-center lg:flex"
        >
          <div class="">
            <DappButtonLite />
          </div>
          <div class="hidden xl:flex">
            <a href="https://twitter.com/Aard_Tech"
              ><img src="../../../assets/twitter.svg" alt="twitter"
            /></a>
            <a href="https://discord.com/invite/ME56FFeTJN"
              ><img
                src="../../../assets/discord.png"
                alt="discord"
                class="mx-4"
            /></a>
          </div>
        </div>

        <div
          class="top-5 z-30 -translate-x-[16px] cursor-pointer text-3xl lg:hidden"
          @click="MenuOpen()"
        >
          <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
        </div>
      </div>

      <!-- mobile navigation -->
      <div
        class="absolute top-0 bottom-0 z-10 block h-screen w-full bg-[#151315] duration-500 ease-in lg:hidden"
        :class="[open ? 'right-0' : 'right-[-120%]']"
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
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import DappButton from '../../Button/DappButton.vue';
import DappButtonLite from '../../Button/DappButtonLite.vue';

export default {
  name: 'HeaderView',
  components: {
    DappButton,
    DappButtonLite,
  },
  setup() {
    let open = ref(false);
    let Links = [
      { name: 'About', link: '/#about' },
      { name: 'Features', link: '/#features' },
      { name: 'Contact us', link: '/#contact' },
      { name: 'Team', link: '/team' },
      { name: 'Docs', link: 'https://docs.aardvark.sh/' },
    ];

    function MenuOpen() {
      open.value = !open.value;
    }
    return { Links, open, MenuOpen };
  },
};
</script>
