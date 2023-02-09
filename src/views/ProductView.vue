<template>
  <div>
    <PageLayout>
      <!-- Hero -->
      <div>
        <!-- background images -->
        <div class="">
          <img
            src="../assets/background.png"
            class="absolute top-0 -z-30 h-screen md:left-0 md:-ml-[40px]"
          />
          <img
            src="../assets/background.png"
            class="absolute top-0 right-0 -z-30 mr-[0px] hidden h-screen md:block"
          />
        </div>
        <!--  -->

        <!-- HERO -->
        <div class="mt-[90px] md:mt-[160px]">
            <h1
                class="custom_text_gradient mx-auto md:w-[402px] text-center text-[32px] font-bold leading-[54px] lg:text-[56px] lg:leading-[90px]"
            >
                &lt;Embedded&gt;
            </h1>
            <h1
                class="text-center text-[32px] font-bold leading-[54px] text-white lg:text-[56px] lg:leading-[90px]"
            >
                wallet based messaging
            </h1>
            <div
                class="mx-[42px] mt-[24px] text-center text-sm leading-[24px] lg:mx-auto lg:w-[700px] lg:text-base lg:font-normal"
            >
                Integrate web3 chat in your project quickly and securely!
            </div>
            
            <div class="mt-[64px] text-center">
                <button
                class="rounded-lg bg-gradient-to-r from-[#db00fb] to-[#ff6000] px-[24px] py-[14px] text-xl font-semibold leading-8 text-[#FFFFFF]"
                >
                Get started -
                <span class="text-base font-extralight leading-[24px]"
                    >free trial!</span
                >
                </button>
            </div>

            <div class="-translate-y-24">
                <img src="../assets/producthero.png" alt="aadvark" class="" />
            </div>
        </div>

        <div
          class="absolute -translate-y-[420px] left-0 right-0 mt-[125px] border-t-[0.5px] border-b-[0.5px] border-[#9a959589] bg-[#ffffff0d] pt-4 pb-7 md:mt-[168px] md:pb-5"
        >
          <div>
            <div class="text-center sm:ml-20 xl:hidden">
              <img
                src="../assets/thundercorelogo.png"
                alt="logo"
                class="mr-16 inline"
              />
              <img
                src="../assets/mlogo.png"
                alt="logo"
                class="inline sm:mr-16"
              />
              <img
                src="../assets/defilogo.png"
                alt="logo"
                class="mr-16 inline"
              />
              <img
                src="../assets/undeadlogo.png"
                alt="logo"
                class="inline sm:mr-16"
              />
            </div>
            <!--  -->

            <div class="hidden text-center xl:block">
              <img
                src="../assets/dthundercorelogo.png"
                alt="logo"
                class="mr-32 inline"
              />
              <img src="../assets/dmlogo.png" alt="logo" class="mr-28 inline" />
              <img
                src="../assets/ddefilogo.png"
                alt="logo"
                class="mr-32 inline"
              />
              <img src="../assets/dundeadlogo.png" alt="logo" class="inline" />
            </div>
          </div>
        </div>

        <div class="md:mt-[60px]">
            <SubHeading>Compatible platforms</SubHeading>
            <div
                class="mx-[42px] mt-[18px] text-center text-sm leading-[22px] lg:mx-auto lg:w-[793px] lg:text-base lg:font-normal lg:leading-6"
            >
            Our web3 messaging app is designed to integrate seamlessly into a variety of platforms, making it easy for you to communicate anywhere at anytime!
          </div>
        </div>

        <!-- CARDS -->
        <div>
            <div>
                
                <!-- detailed cards -->
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div></div>
            <div></div>
        </div>
      </div>
    </PageLayout>
  </div>
</template>

<script>
import PageLayout from '@/components/Layout/PageLayout.vue';
import DappButton from '@/components/Button/DappButton.vue';
import SubHeading from '@/components/utils/SubHeading.vue';

export default {
  name: 'ProductView',
  components: {
    PageLayout,
    DappButton,
    SubHeading,
  },
};
</script>
