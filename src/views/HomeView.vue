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
          <div class="absolute -left-8 top-5 hidden xl:block">
            <img src="../assets/pharaohicon.svg" class="h-[161px] w-[122px]" />
          </div>
          <div class="">
            <h1
              class="md: text-[40px] font-bold leading-[64px] text-white lg:text-[64px] lg:leading-[104px]"
            >
              <span class="lg:-ml-[54px]">Experience</span> the
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

          <!-- cards -->
          <!-- card 1 -->
          <div class="mt-[48px]">
            <div
              class="justify-betwee mx-auto rounded-3xl border-2 border-[#ffffff1a] bg-[#ffffff0d] md:w-[600px] lg:flex lg:max-h-[470px] lg:w-auto lg:max-w-[1200px]"
            >
              <div
                class="text-center lg:ml-[78px] lg:mb-[110px] lg:w-[450px] lg:text-left"
              >
                <h2
                  class="custom_text_gradient mx-auto mt-[24px] w-[320px] px-[14px] text-[32px] font-bold sm:w-auto md:w-auto xl:mt-[50px]"
                >
                  End to End Encryption
                </h2>
                <div class="mt-[16px] px-[14px]">
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
              <div
                class="relative overflow-hidden rounded-3xl md:w-[600px] xl:w-[800px]"
              >
                <img
                  class="-top-20 xl:absolute"
                  src="../assets/whyimage1.png"
                  alt="encryption"
                />
              </div>
            </div>

            <!-- card 2 -->
            <div class="mt-[48px]">
              <div
                class="justify-betwee mx-auto flex-row-reverse rounded-3xl border-2 border-[#ffffff1a] bg-[#ffffff0d] md:w-[600px] lg:flex lg:max-h-[470px] lg:w-auto lg:max-w-[1200px] xl:h-[470px]"
              >
                <div
                  class="text-center lg:mb-[110px] lg:w-[450px] lg:text-left xl:-translate-x-36"
                >
                  <h2
                    class="custom_text_gradient mx-auto mt-[24px] w-[320px] px-[14px] text-[32px] font-bold sm:w-auto md:w-auto xl:mt-[50px]"
                  >
                    Intuitive interface
                  </h2>
                  <div class="mt-[16px] px-[14px]">
                    Aardvark messenger is designed to be easy to use, no matter
                    your level of technical expertise. With a simple and
                    intuitive interface, you can start chatting with your
                    friends and family in just a few taps.
                  </div>
                </div>
                <div
                  class="relative overflow-hidden rounded-3xl md:w-[600px] xl:w-[800px]"
                >
                  <img
                    class="-top-20 -left-14 xl:absolute xl:h-[600px]"
                    src="../assets/whyimage2.png"
                    alt="encryption"
                  />
                </div>
              </div>
            </div>

            <!-- card 3 -->
            <div class="mt-[48px]">
              <div
                class="justify-betwee mx-auto rounded-3xl border-2 border-[#ffffff1a] bg-[#ffffff0d] md:w-[600px] lg:flex lg:max-h-[470px] lg:w-auto lg:max-w-[1200px]"
              >
                <div
                  class="text-center lg:ml-[78px] lg:mb-[110px] lg:w-[450px] lg:text-left"
                >
                  <h2
                    class="custom_text_gradient mx-auto mt-[24px] w-[320px] px-[14px] text-[32px] font-bold sm:w-auto md:w-auto xl:mt-[50px]"
                  >
                    Blazing fast set-up
                  </h2>
                  <div class="mt-[16px] px-[14px]">
                    Aardvark uses your wallets to verify ownership, all you need
                    to do is sign a message with your wallet that Aardvark can
                    verify, proving you own the wallet. Then you can receive
                    messages sent to that wallet!
                  </div>
                </div>
                <div
                  class="relative overflow-hidden rounded-3xl md:w-[600px] xl:w-[800px]"
                >
                  <img
                    class="-top-20 xl:absolute"
                    src="../assets/whyimage3.png"
                    alt="encryption"
                  />
                </div>
              </div>
            </div>

            <!-- card 4 -->
            <div class="mt-[48px]">
              <div
                class="justify-betwee mx-auto flex-row-reverse rounded-3xl border-2 border-[#ffffff1a] bg-[#ffffff0d] md:w-[600px] lg:flex lg:max-h-[470px] lg:w-auto lg:max-w-[1200px] xl:h-[470px]"
              >
                <div
                  class="text-center lg:mb-[110px] lg:w-[450px] lg:text-left xl:-translate-x-36"
                >
                  <h2
                    class="custom_text_gradient mx-auto mt-[24px] w-[320px] px-[14px] text-[32px] font-bold sm:w-auto md:w-auto xl:mt-[50px]"
                  >
                    Cross platform
                  </h2>
                  <div class="mt-[16px] px-[14px]">
                    One of the biggest benefits of Aardvark messenger is that it
                    is cross-platform. This means that you can use it on any
                    device, including your phone, tablet, or computer, as long
                    as you have an internet connection. This makes it easy to
                    stay in touch with your loved ones no matter where you are
                    or what device you are using.
                  </div>
                  <div class="flex">
                    <div class="">x</div>
                    <div class="">y</div>
                    <div class="">z</div>
                  </div>
                </div>
                <div
                  class="relative overflow-hidden rounded-3xl md:w-[600px] xl:w-[800px]"
                >
                  <img
                    class="-top-20 -left-14 xl:absolute xl:h-[600px]"
                    src="../assets/whyimage4.png"
                    alt="encryption"
                  />
                </div>
              </div>
            </div>
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
