<template>
  <div>
    <PageLayout>
      <!-- Hero -->
      <div>
        <div>
          <img
            src="../assets/background.png"
            class="absolute top-0 left-0 -z-10 -ml-[40px] -mr-[40px] h-screen"
          />
        </div>
        <div class="mx-auto w-[340px] text-center sm:w-[650px] md:max-w-5xl">
          <div class="hidden">
            <img src="../assets/pharaohicon.svg" />
          </div>
          <div class="">
            <h1 class="text-[40px] font-bold leading-[64px] text-white">
              Experience the
              <span class="mr-[-28px] sm:mr-[0px]"
                ><img
                  src="../assets/earthicon.png"
                  class="mx-[15px] inline h-[48px] w-[48px]"
                />freedom of</span
              >
              decentralized
              <div
                class="message custom_text_gradient inline h-[74px] w-[330px] rounded-full bg-[#FFFFFF] p-[2px]"
              >
                messaging
                <img
                  src="../assets/boredape.svg"
                  class="inline h-[48px] w-[48px]"
                />
              </div>
            </h1>
          </div>
        </div>
        <div class="text-center text-sm mt-[32px] leading-[22px] mx-[42px]">
          Experience secure, private messaging on the blockchain. Join our
          decentralized platform and take control of your online communication.
        </div>
        <div class="text-center mt-[48px]">
          <DappButton />
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
    DappButton
  },
};
</script>
