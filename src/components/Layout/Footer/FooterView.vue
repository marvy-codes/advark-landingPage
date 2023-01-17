<template>
  <div class="mt-[100px] border-t-[1px] border-[#ffffff1a] lg:mt-[128px]  py-[87px] md:py-[45px]  lg:flex justify-between">
    <div class="text-center lg:text-left">
      <div class="">
        <img src="../../../assets/advark.svg" alt="aardvark" class="mx-auto " />
      </div>
      <div class="mt-[48px] md:mt-[63px]">
        <button
          class="rounded-lg bg-gradient-to-tr from-[#db00fb] to-[#ff6000] px-[24px] py-[14px] lg:px-[16px] lg:py-[11px] text-xl lg:text-sm font-semibold leading-8 text-[#FFFFFF]"
        >
          Launch Dapp
          <img src="../../../assets/rocket.png" alt="rocket" class="ml-1 inline lg:scale-75" />
        </button>
      </div>
    </div>
    <div class="flex flex-wrap justify-evenly mt-[58px] lg:mt-[0px]">
        <div class="mx-[10px]  mt-[10px]">
          <ul class="text-sm leading-6 w-[148px]"> 
            <li class="text-white text-base mb-[19px]">Learn</li>
            <li class="mb-[16px]"><a>Home</a></li>
            <li class="mb-[16px]"><a>The team</a></li>
            <li class="mb-[16px]"><a>About us</a></li> 
            <li><a>Careers</a></li>
          </ul>
        </div>
        
        <div class=" mx-[10px]  mt-[10px]">
          <ul class="text-sm leading-6 w-[148px]"> 
            <li class="text-white text-base mb-[19px]">Partner</li>
            <li class="mb-[16px]"><a>Apply for partnership</a></li>
          </ul>
        </div>

        <div class=" mx-[10px] mt-[10px]">
          <ul class="text-sm leading-6 w-[148px] mt-[25px] sm:mt-[0px]"> 
            <li class="text-white text-base mb-[19px]">Develop</li>
            <li class="mb-[16px]"><a>Documentation</a></li>
            <li class="mb-[16px]"><a>Integration</a></li>
          </ul>
        </div>

        <div class=" mx-[10px] mt-[10px]">
          <ul class="text-sm leading-6 w-[148px] mt-[25px] sm:mt-[0px]"> 
            <li class="text-white text-base mb-[19px]">Legal</li>
            <li class="mb-[16px]"><a>Terms of service</a></li>
            <li class="mb-[16px]"><a>Privacy policy</a></li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import DappButton from '@/components/Button/DappButton.vue';

export default {
  name: 'FooterView',
  components: {
    DappButton
  }
};
</script>
