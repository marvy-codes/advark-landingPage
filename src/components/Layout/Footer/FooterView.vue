<template>
  <div
    class="mt-[100px] justify-between border-t-[1px] border-[#ffffff1a] py-[87px] md:py-[45px] lg:mt-[128px] lg:flex"
  >
    <div class="text-center lg:text-left">
      <div class="">
        <img src="../../../assets/advark.svg" alt="aardvark" class="mx-auto" />
      </div>
      <div class="mt-[48px] md:mt-[63px]">
        <button
          class="rounded-lg bg-gradient-to-tr from-[#db00fb] to-[#ff6000] px-[24px] py-[14px] text-xl font-semibold leading-8 text-[#FFFFFF] lg:px-[16px] lg:py-[11px] lg:text-sm"
        >
          Launch Dapp
          <img
            src="../../../assets/rocket.png"
            alt="rocket"
            class="ml-1 inline lg:scale-75"
          />
        </button>
      </div>
    </div>
    <div class="mt-[58px] flex flex-wrap justify-evenly lg:mt-[0px]">
      <div class="mx-[10px] mt-[10px]">
        <ul class="w-[148px] text-sm leading-6">
          <li class="mb-[19px] text-base text-white">Learn</li>
          <li class="mb-[16px]"><a href="/">Home</a></li>
          <li class="mb-[16px]"><a href="/team">The team</a></li>
          <li class="mb-[16px]"><a href="/#about ">About us</a></li>
          <li><a href="/Careers">Careers</a></li>
        </ul>
      </div>

      <div class="mx-[10px] mt-[10px]">
        <ul class="w-[148px] text-sm leading-6">
          <li class="mb-[19px] text-base text-white">Partner</li>
          <li class="mb-[16px]">
            <a href="https://aardvark.sh/partnerships">Apply for partnership</a>
          </li>
        </ul>
      </div>

      <div class="mx-[10px] mt-[10px]">
        <ul class="mt-[25px] w-[148px] text-sm leading-6 sm:mt-[0px]">
          <li class="mb-[19px] text-base text-white">Develop</li>
          <li class="mb-[16px]">
            <a href="https://docs.aardvark.sh/">Documentation</a>
          </li>
          <li class="mb-[16px]">
            <a href="https://developer.aardvark.sh/">Integration</a>
          </li>
        </ul>
      </div>

      <div class="mx-[10px] mt-[10px]">
        <ul class="mt-[25px] w-[148px] text-sm leading-6 sm:mt-[0px]">
          <li class="mb-[19px] text-base text-white">Legal</li>
          <li class="mb-[16px]"><a href="/terms">Terms of service</a></li>
          <li class="mb-[16px]"><a href="/privacy">Privacy policy</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterView',
};
</script>
