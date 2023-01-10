<template>
  <div class="flex items-center justify-between md:my-4">
    <div>
      <img src="../../../assets/advark.svg" alt="aardvark" />
    </div>

    <!-- desktop navigation -->
    <ul class="mx-auto hidden text-center md:block md:flex md:items-center">
      <li
        v-for="link in Links"
        :key="link.link"
        class="mx-auto my-6 md:mx-4 md:my-0"
      >
        <a :href="link.link">{{ link.name }}</a>
      </li>
    </ul>

    <div
      class="md:space-between hidden md:block md:flex md:flex-row-reverse md:items-center"
    >
      <div class="">
        <button>Lunch Dapp</button>
      </div>
      <div class="flex">
        <img src="../../../assets/twitter.svg" alt="twitter" />
        <img src="../../../assets/discord.png" alt="discord" />
      </div>
    </div>

    <div
      class="fixed right-6 top-10 z-10 cursor-pointer text-4xl md:hidden md:hidden"
      @click="MenuOpen()"
    >
      <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
    </div>
  </div>

  <!-- mobile navigation -->
  <div
    class="absolute top-0 bottom-0 w-full bg-[#151315] duration-700 ease-in md:hidden"
    :class="[open ? 'left-0' : 'left-[-100%]']"
  >
    <ul class="mx-auto text-center">
      <li v-for="link in Links" :key="link.link" class="mx-auto my-6">
        <a :href="link.link">{{ link.name }}</a>
      </li>
    </ul>

    <div class="mx-auto text-center">
      <div class="">
        <button>Lunch Dapp</button>
      </div>
      <div class="spaced-around mx-auto flex text-center">
        <img src="../../../assets/twitter.svg" alt="twitter" />
        <img src="../../../assets/discord.png" alt="discord" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HeaderView',
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
