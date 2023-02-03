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
          <li class="overlay_container">
            <a class="trigger">Products</a>
            <div class="overlay absolute w-[396px] bg-[#FFFFFF] rounded-2xl -translate-x-4 top-16">
              <img src="../../../assets/polygon.png" class="-translate-y-3 translate-x-9" />
              <div class="ml-[50px] mt-[24px]">
                <div class="-translate-x-[26px]"><a href="/" class="product__one"><i class="bi bi-chat-text mr-2"></i>Aardvark decentralized messenger<i class="bi bi-arrow-right arrow text-[20px] ml-2"></i></a></div>
                <div class="product__description text-left mt-[8px]">Gain access to Aardvark messengers sophisticated features. Experience.</div>
              </div>
              <div class="ml-[50px] mb-[24px] mt-[32px]">
                <div class="-translate-x-[26px]"><a href="/" class="product__one"><i class="bi bi-cpu mr-2"></i>Embedded wallet based messenger<i class="bi bi-arrow-right arrow text-[20px] ml-2"></i></a></div>
                <div class="product__description text-left mt-[8px] w-[300px]">Integrate web3 chat in your project quickly and securely! </div>
              </div>
            </div>
          </li>
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
        class="absolute left-0 top-0 bottom-0 z-10 block h-screen w-full bg-[#151315] duration-500 ease-in lg:hidden"
        :class="[open ? 'top-0' : 'top-[-1600%]']"
      >
        <div class="ml-[32px]  mt-7 h-[27px] w-[127px]">
          <img src="../../../assets/advark.svg" alt="aardvark" />
        </div>

        <ul class="mx-auto mt-[27px] ml- text-base">
          <li class=" text-base border-t-[0.1px] border-b-[0.1px] pt-[32px] pb-[32px]">
            <a class="ml-[32px]  font-semibold leading-[24px]" @click="toggleProduct()">Products  <i :class="[Productopen ? 'bi bi-chevron-up' : 'bi bi-chevron-down']"></i></a>
            <div  :class="[Productopen ? 'block' : 'hidden']">
              <div class="ml-[50px] mt-[24px]">
                <div class="-translate-x-[26px] text-white"><a href="/"  @click="MenuOpen()" class=""><i class="bi bi-chat-text mr-2"></i>Aardvark decentralized messenger<i class="bi bi-arrow-right arrow text-[20px] ml-2"></i></a></div>
                <div class=" text-left mt-[8px] w-[300px]">Gain access to Aardvark messengers sophisticated features. Experience.</div>
              </div>
              <div class="ml-[50px] mb-[24px] mt-[32px]">
                <div class="-translate-x-[26px] text-white"><a href="/"  @click="MenuOpen()" class=""><i class="bi bi-cpu mr-2"></i>Embedded wallet based messenger<i class="bi bi-arrow-right arrow text-[20px] ml-2"></i></a></div>
                <div class="text-left mt-[8px] w-[300px]">Integrate web3 chat in your project quickly and securely! </div>
              </div>
            </div>
          </li>
          <li
            v-for="link in Links"
            :key="link.link"
            class=" text-base pt-[32px] pb-[32px] border-b-[0.1px] " @click="MenuOpen()"
          >
            <a :href="link.link" class="ml-[32px]  font-semibold leading-[24px]">{{ link.name }}</a>
          </li>
        </ul>

        <div class="mx-auto mt-28 text-center">
          <div class="">
            <DappButtonLite />
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
    let Productopen = ref(false);
    let Links = [
      { name: 'Features', link: '/#features' },
      { name: 'Contact us', link: '/#contact' },
      { name: 'Team', link: '/team' },
      { name: 'Docs', link: 'https://docs.aardvark.sh/' },
    ];

    function MenuOpen() {
      open.value = !open.value;
    };
    function toggleProduct() {
      Productopen.value = !Productopen.value;
    };
    return { Links, open,  Productopen, MenuOpen, toggleProduct };
  },
};
</script>
