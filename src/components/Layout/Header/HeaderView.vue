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
            <a class="trigger py-[8px] hover:font-bold lg:px-[12px]"
              >Products</a
            >
            <div
              class="overlay border_gradient absolute top-16 h-[232px] w-[400px] -translate-x-4 rounded-2xl bg-[#FFFFFF] shadow-lg shadow-[#c52eb348]"
            >
              <img
                src="../../../assets/polygon.png"
                class="-translate-y-[15px] translate-x-9"
              />
              <div class="product ml-[50px] mt-[4px]">
                <div class="-translate-x-[26px]">
                  <a href="/" class="product__one">
                    <span class="product__link"
                      ><i class="bi bi-chat-text mr-2"></i>Aardvark
                      decentralized messenger</span
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-arrow-right-short p__arrow"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </a>
                </div>
                <div class="product__description mt-[8px] w-[300px] text-left">
                  Gain access to Aardvark messengers sophisticated features.
                  Experience.
                </div>
              </div>
              <div class="ml-[50px] mb-[24px] mt-[32px]">
                <div class="-translate-x-[26px]">
                  <a href="/Product" class="product__one"
                    ><i class="bi bi-cpu mr-2"></i>Embedded wallet based
                    messenger
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-arrow-right-short p__arrow"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </a>
                </div>
                <div class="product__description mt-[8px] w-[300px] text-left">
                  Integrate web3 chat in your project quickly and securely!
                </div>
              </div>
            </div>
          </li>
          <li v-for="link in Links" :key="link.link" class="xl:ml-5">
            <a
              class="duration-900 py-[8px] transition ease-in hover:font-bold lg:px-[12px]"
              :href="link.link"
              >{{ link.name }}</a
            >
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
          class="top-5 z-30 -translate-x-[16px] cursor-pointer text-3xl text-white lg:hidden"
          @click="MenuOpen()"
        >
          <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
        </div>
      </div>

      <!-- mobile navigation -->
      <div
        class="absolute left-0 top-0 bottom-0 z-10 block h-screen w-full overflow-scroll bg-[#151315] duration-500 ease-in lg:hidden"
        :class="[open ? 'top-0' : 'top-[-1600%]']"
      >
        <div class="ml-[32px] mt-7 mb-[32px] h-[27px] w-[127px]">
          <img src="../../../assets/advark.svg" alt="aardvark" />
        </div>

        <ul class="mx-auto text-base duration-500 ease-in">
          <li class="flex flex-col text-base">
            <a
              class="border-t-[0.1px] border-b-[0.1px] border-[#ffffff79] pt-[32px] pb-[32px] pl-[32px] font-semibold font-normal leading-[24px] text-white md:pl-[64px]"
              :class="[Productopen ? 'bg-[#bb48bd0f] ' : '']"
              @click="toggleProduct()"
              ><span :class="[Productopen ? 'custom_text_gradient' : '']"
                >Products </span
              ><i
                class="ml-2"
                :class="[
                  Productopen ? 'bi bi-chevron-up' : 'bi bi-chevron-down',
                ]"
              ></i
            ></a>
            <div
              class="ml-[32px] duration-500 ease-in md:ml-[64px]"
              :class="[
                Productopen
                  ? 'visible block opacity-100'
                  : 'invisible hidden opacity-0',
              ]"
            >
              <div class="mt-[24px]">
                <div class="text-sm font-semibold text-white">
                  <a href="/" class="" @click="MenuOpen()"
                    ><i class="bi bi-chat-text mr-2"></i>Aardvark decentralized
                    messenger
                  </a>
                </div>
                <div
                  class="mt-[8px] ml-[22px] w-[300px] text-left text-sm font-normal"
                >
                  Gain access to Aardvark messengers sophisticated features.
                  Experience.
                </div>
              </div>
              <div class="] mb-[24px] mt-[32px]">
                <div class="text-sm font-semibold text-white">
                  <a href="/Product" class="" @click="MenuOpen()"
                    ><i class="bi bi-cpu mr-2"></i>Embedded wallet based
                    messenger
                  </a>
                </div>
                <div
                  class="mt-[8px] ml-[22px] w-[300px] text-left text-sm font-normal"
                >
                  Integrate web3 chat in your project quickly and securely!
                </div>
              </div>
            </div>
          </li>
          <li
            v-for="link in Links"
            :key="link.link"
            class="flex flex-col text-base"
            @click="MenuOpen()"
          >
            <a
              :href="link.link"
              class="-translate-y-[0.5px] border-t-[0.1px] border-b-[0.1px] border-[#ffffff79] pt-[32px] pb-[32px] pl-[32px] font-normal font-semibold leading-[24px] text-white md:pl-[64px]"
              >{{ link.name }}</a
            >
          </li>
        </ul>

        <div class="mx-auto mt-14 text-center">
          <div class="">
            <button
              class="custom_text_gradient custom_border_gradient text-sm font-semibold leading-10"
            >
              Launch Dapp
              <img
                src="../../../assets/rocketlite.png"
                alt="rocket"
                class="ml-1 inline"
              />
            </button>
          </div>
        </div>

        <div>
          <img
            class="absolute left-0 right-0 bottom-0 -z-10 w-[100%]"
            src="../../../assets/frame.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import DappButtonLite from '../../Button/DappButtonLite.vue';

export default {
  name: 'HeaderView',
  components: {
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
    }
    function toggleProduct() {
      Productopen.value = !Productopen.value;
    }
    return { Links, open, Productopen, MenuOpen, toggleProduct };
  },
};
</script>
