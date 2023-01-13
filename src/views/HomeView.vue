<template>
  <div>
    <PageLayout>
      <!-- Hero -->
      <div>
        <div class="">
          <img
            src="../assets/background.png"
            class="absolute top-0 left-0 -z-10 -ml-[40px] h-screen"
          />
          <img
            src="../assets/background.png"
            class="absolute top-0 right-0 -z-10 mr-[0px] h-screen hidden md:block"
          />
        </div>
        <div
          class="relative mx-auto w-[340px] text-center sm:w-[650px] md:w-[700px] lg:w-[1100px] lg:pl-10"
        >
          <div class="absolute -left-8 top-5 hidden lg:block">
            <img src="../assets/pharaohicon.svg" class="h-[161px] w-[122px]" />
          </div>
          <div class="">
            <h1
              class="md: text-[40px] font-bold leading-[64px] text-white lg:text-[64px] lg:leading-[104px]"
            >
              Experience the
              <span class="mr-[-28px] sm:mr-[0px]"
                ><img
                  src="../assets/earthicon.png"
                  class="mx-[15px] inline h-[48px] w-[48px] lg:h-[80px] lg:w-[80px]"
                />freedom of</span
              >
              decentralized
              <div
                class="message custom_text_gradient inline h-[74px] w-[330px] rounded-full bg-[#FFFFFF] p-[2px]"
              >
                messaging
                <img
                  src="../assets/boredape.svg"
                  class="inline h-[48px] w-[48px] lg:h-[80px] lg:w-[80px]"
                />
              </div>
            </h1>
          </div>
        </div>
        <div
          class="mx-[42px] mt-[32px] text-center text-sm leading-[22px] lg:mx-auto lg:w-[700px] lg:text-base lg:font-normal lg:leading-6"
        >
          Experience secure, private messaging on the blockchain. Join our
          decentralized platform and take control of your online communication.
        </div>
        <div class="mt-[48px] text-center">
          <DappButton />
        </div>
        <div class="mt-[76px] font-semibold text-base leading-6">
          <span>
            Trusted by
          </span>
          <div class="flex ">
              <div>
                <img src="../assets/thundercorelogo.png" alt="logo"/>
              </div>
              <div>
                <img src="../assets/mlogo.png" alt="logo"/>
              </div>
              <div>
                <img src="../assets/defilogo.png" alt="logo"/>
              </div>
              <div>
                <img src="../assets/undeadlogo.png" alt="logo"/>
              </div>
          </div>
        </div>

      </div>
    </PageLayout>
  </div>
</template>

<script>
import PageLayout from '@/components/Layout/PageLayout.vue';
import DappButton from '@/components/Layout/Button/DappButton.vue';

export default {
  name: 'HomeView',
  components: {
    PageLayout,
    DappButton,
  },
};
</script>
