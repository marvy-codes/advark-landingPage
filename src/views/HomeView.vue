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
            class="absolute top-0 right-0 -z-10 mr-[0px] hidden h-screen md:block"
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
        <div class="mt-[76px] text-base font-semibold leading-6">
          <span> Trusted by </span>
          <div class="flex">
            <div class="h-[46px] w-[213px]">
              <img src="../assets/thundercorelogo.png" alt="logo" />
            </div>
            <div class="h-[75px] w-[75px]">
              <img src="../assets/mlogo.png" alt="logo" />
            </div>
            <div class="h-[29px] w-[213px]">
              <img src="../assets/defilogo.png" alt="logo" />
            </div>
            <div class="h-[42px] w-[62px]">
              <img src="../assets/undeadlogo.png" alt="logo" />
            </div>
          </div>
        </div>

        <!-- why aadvark section -->
        <div class="mt-[56px]">
          <div>
            <SubHeading>Why use Aardvark</SubHeading>
          </div>
          <div
            class="mx-[42px] mt-[18px] text-center text-sm leading-[22px] lg:mx-auto lg:w-[900px] lg:text-base lg:font-normal lg:leading-6"
          >
            Explore below to see why Aardvark Messenger is a powerful, easy to
            use and secure web messenger.
          </div>

          <div class="mt-[48px]">
            <div class="md:flex">
              <div class="text-center">
                <h2 class="custom_text_gradient font-bold text-[32px] mx-auto w-[300px] sm:w-auto">End to End Encryption</h2>
                <div class="px-[14px] ">
                  Aardvark messenger is equipped with end-to-end encryption to
                  ensure the security and privacy of your conversations. This
                  means that all messages sent through the app are encrypted and
                  can only be decrypted by the intended recipient. In addition,
                  our end-to-end encryption is powered by the decentralized and
                  secure nature of the web3 ecosystem, providing an extra layer
                  of protection for your messages. Rest assured that your
                  conversations are secure when using our app.
                </div>
              </div>
              <div>
                <img src="../assets/whyimage1.png" alt="encryption" />
              </div>
            </div>

            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <!-- Features section -->
        <div class="mt-[56px]">
          <div>
            <SubHeading>Features</SubHeading>
          </div>
          <div
            class="mx-[42px] mt-[18px] text-center text-sm leading-[22px] lg:mx-auto lg:w-[900px] lg:text-base lg:font-normal lg:leading-6"
          >
            Aardvark messenger offers the following in app features
          </div>
        </div>

        <!-- Supported blockchains -->
        <div class="mt-[56px]">
          <div>
            <SubHeading>Supported blockchains</SubHeading>
          </div>
          <div
            class="mx-[42px] mt-[18px] text-center text-sm leading-[22px] lg:mx-auto lg:w-[900px] lg:text-base lg:font-normal lg:leading-6"
          >
            Aardvark messenger is available on your favorite blockchains
          </div>
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
  name: 'HomeView',
  components: {
    PageLayout,
    DappButton,
    SubHeading,
  },
};
</script>
