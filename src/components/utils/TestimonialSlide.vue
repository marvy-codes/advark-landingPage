<template>
    <VueperSlides
              :arrows="false"
                :slide-content-outside="false"
                class="no-shadow"
            >
            <VueperSlide :key="1">
                  <template #content>
              <div
              class="text-left m-[16px] rounded-3xl border-[1px] border-[#ffffff1a] bg-[#ffffff0d] p-[24px]   md:w-[340px] xl:w-[380px] -translate-y-[30px] scale-[.8]"
            >
              <div class="text-xl font-normal leading-6">
                As someone who values their privacy, I can't recommend Aardvark messenger enough. It's a breath of fresh air in a world where online privacy is increasingly hard to come by.
              </div>
              <div
                class="md:leading-[40px] mx-auto mt-[26px] flex items-center text-xl font-semibold text-[#ffffffde] md:text-2xl justify-start"
              >
                <img
                  src="../../assets/testicon1.png"
                  alt=""
                  class="mr-3 md:h-[48px] md:w-[48px]"
                />
                <div>
                  <span class="font-JetBrains">TempestOG</span><br />
                  
                </div>
              </div>
            </div>
            </template>
            </VueperSlide>
            <VueperSlide :key="2">
                  <template #content>
            <div
              class="m-[16px] rounded-3xl border-[1px] border-[#ffffff1a] bg-[#ffffff0d] p-[24px] text-left md:w-[340px] xl:w-[380px] -translate-y-[30px] scale-[.8]"
            >
              <div class="text-xl font-normal leading-6">
                I've tried a lot of messaging platforms over the years, but none of them come close to Aardvark messenger in terms of security and user experience. It's a must-try!</div>
              <div
                class="md:leading-40px mx-auto mt-[26px] flex items-center text-xl font-semibold text-[#ffffffde] md:text-2xl justify-start"
              >
                <img
                  src="../../assets/testicon2.png"
                  alt=""
                  class="mr-3 md:h-[48px] md:w-[48px]"
                />
                <div>
                  <span class="font-JetBrains">Undead0x</span><br />
                  
                </div>
              </div>
            </div>
            </template>
            </VueperSlide>
            <VueperSlide :key="3">
                  <template #content>
            <div
              class="m-[16px] rounded-3xl border-[1px] border-[#ffffff1a] bg-[#ffffff0d] p-[24px] text-left md:w-[340px] xl:w-[380px] -translate-y-[30px] scale-[.8]"
            >
              <div class="text-[20px] font-normal leading-6">The messaging service is advanced, with features like end-to-end encryption, wallet-based services. After using it on PC and mobile, it will be my go-to Web3 messaging service.</div>
              <div
                class="md:leading-40px mx-auto mt-[26px] flex items-center text-xl font-semibold text-[#ffffffde] md:text-2xl justify-start"
              >
                <img
                  src="../../assets/nnn.png"
                  alt=""
                  class="mr-3 md:h-[48px] md:w-[48px]"
                />
                <div>
                  <span class="font-JetBrains">Defi Kingdoms</span><br />
                  
                </div>
              </div>
            </div>
            </template>
            </VueperSlide>
            </VueperSlides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'TestimonialSlide',
  components: {
    VueperSlides,
    VueperSlide,
  },
};
</script>

<style>
.vueperslide {
  height: 300px;
}
.vueperslides__bullets {
    transform: translateY(50px);
}

.vueperslides__parallax-wrapper {
  height: 800px;
}

@media (min-width: 400px) {
  .vueperslides__parallax-wrapper {
    height: 280px;
  }
}

@media (min-width: 580px) {
  .vueperslides__parallax-wrapper {
    height: 260px;
  }
}
@media (min-width: 880px) {
  .vueperslides__parallax-wrapper {
    height: 255px;
  }
}
@media (min-width: 940px) {
  .vueperslides__parallax-wrapper {
    height: 235px;
  }
}



.vueperslides__bullet--active .default {
  background-color: #ffffff;
}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}

</style>
