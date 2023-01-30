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

        <div
          class="mt-[76px] bg-[#ffffff0d] absolute left-0 right-0"
        >

          <div>
            <div class="text-center sm:ml-20 xl:hidden">
              <img src="../assets/thundercorelogo.png" alt="logo" class="mr-16 inline" />
              <img src="../assets/mlogo.png" alt="logo" class="inline sm:mr-16" />
              <img src="../assets/defilogo.png" alt="logo" class="mr-16 inline" />
              <img src="../assets/undeadlogo.png" alt="logo" class="inline sm:mr-16" />
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



        <!-- why aadvark section -->
        <div class="mt-[246px]">
          <div id="about">
            <SubHeading>Why use Aardvark</SubHeading>
          </div>
          <div
            class="mx-[42px] mt-[18px] text-center text-sm leading-[22px] lg:mx-auto lg:w-[900px] lg:text-base lg:font-normal lg:leading-6"
          >
            Explore below to see why Aardvark Messenger is a powerful, easy to
            use and secure web messenger.
          </div>
          <!-- cards -->
          <div class="mt-[48px]">
            <!-- card 1 -->
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

            <img
              src="../assets/bgright.png"
              class="absolute right-0 -z-30 h-[1200px] md:h-auto"
            />
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
                    class="custom_text_gradient mx-auto mt-[24px] w-[270px] px-[14px] text-[32px] font-bold sm:w-[320px] sm:w-auto md:w-auto xl:mt-[50px]"
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
                  <div class="mt-[48px] flex justify-center">
                    <div
                      class="cross__gradient m-[8px] h-[92px] w-[98px] rounded-2xl p-4 text-center text-white sm:h-[81px] sm:w-[150px]"
                    >
                      <div class="lg:-ml-10 lg:mt-2 lg:text-[20px]">
                        <img
                          src="../assets/web.png"
                          alt="web"
                          class="mx-auto lg:mr-2 lg:inline"
                        />web
                      </div>
                    </div>
                    <div
                      class="cross__gradient m-[8px] h-[92px] w-[98px] rounded-2xl p-4 text-center text-white sm:h-[81px] sm:w-[150px]"
                    >
                      <div>
                        <div class="lg:-ml-2 lg:mt-2 lg:text-[18px]">
                          <img
                            src="../assets/android.png"
                            alt="web"
                            class="mx-auto lg:mr-2 lg:inline"
                          />Android
                        </div>
                      </div>
                    </div>
                    <div
                      class="cross__gradient m-[8px] h-[92px] w-[98px] rounded-2xl p-4 text-center text-white sm:h-[81px] sm:w-[150px]"
                    >
                      <div>
                        <div class="lg:-ml-12 lg:mt-2 lg:text-[20px]">
                          <img
                            src="../assets/ios.png"
                            alt="ios"
                            class="mx-auto lg:mr-2 lg:inline"
                          />IOS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="relative overflow-hidden rounded-3xl md:w-[600px] xl:w-[800px]"
                >
                  <img
                    class="-top-20 -left-14 block lg:hidden xl:absolute xl:h-[600px]"
                    src="../assets/whyimage4.png"
                    alt="encryption"
                  />
                  <img
                    class="-top-20 -left-14 hidden lg:block xl:absolute xl:h-[600px]"
                    src="../assets/whyimage4d.png"
                    alt="encryption"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="../assets/bgleft.png"
          class="absolute left-0 -z-30 h-[1200px] md:h-auto"
        />
        <!-- Features section -->
        <div id="features" class="mt-[100px]">
          <div>
            <SubHeading>Features</SubHeading>
          </div>
          <div
            class="mx-[42px] mt-[18px] text-center text-sm leading-[22px] lg:mx-auto lg:w-[900px] lg:text-base lg:font-normal lg:leading-6"
          >
            Aardvark messenger offers the following in app features
          </div>
          <!-- cards -->
          <div
            class="mx-auto mt-[40px] flex-wrap justify-center md:mt-[70px] md:flex"
          >
            <div
              class="m-[16px] rounded-3xl border-[1px] border-[#ffffff1a] bg-[#ffffff0d] p-[24px] text-center md:w-[340px] md:text-left xl:w-[380px]"
            >
              <div
                class="md:leading-40px mx-auto mb-[28px] flex items-center justify-center text-xl font-semibold text-[#ffffffde] md:text-2xl xl:justify-start"
              >
                <img
                  src="../assets/Consolidatedinbox.png"
                  alt=""
                  class="mr-3 md:h-[48px] md:w-[48px]"
                />Consolidated Inbox``
              </div>
              <div class="text-sm font-normal leading-6">
                With our consolidated inbox, you can easily view and manage all
                of your messages and transactions from a single interface. This
                saves you the time and effort of switching between different
                wallets or apps to check your messages and transactions.
              </div>
            </div>
            <div
              class="m-[16px] rounded-3xl border-[1px] border-[#ffffff1a] bg-[#ffffff0d] p-[24px] text-center md:w-[340px] md:text-left xl:w-[380px]"
            >
              <div
                class="md:leading-40px mx-auto mb-[28px] flex items-center justify-center text-xl font-semibold text-[#ffffffde] md:text-2xl xl:justify-start"
              >
                <img
                  src="../assets/Multichain.png"
                  alt=""
                  class="mr-3 md:h-[48px] md:w-[48px]"
                />multi-chain support
              </div>
              <div class="text-sm font-normal leading-6">
                With our multi-chain support feature, you can easily switch
                between different blockchain networks within the app, giving you
                the flexibility to connect with your desired blockchain of
                choice. that best suits your needs.
              </div>
            </div>
            <div
              class="m-[16px] rounded-3xl border-[1px] border-[#ffffff1a] bg-[#ffffff0d] p-[24px] text-center md:w-[340px] md:text-left xl:w-[380px]"
            >
              <div
                class="md:leading-40px mx-auto mb-[28px] flex items-center justify-center text-xl font-semibold text-[#ffffffde] md:text-2xl xl:justify-start"
              >
                <img
                  src="../assets/Consolidatedinbox.png"
                  alt=""
                  class="mr-3 md:h-[48px] md:w-[48px]"
                />Send Token/NFT
              </div>
              <div class="text-sm font-normal leading-6">
                Our send token/NFT feature is a convenient and easy way to share
                cryptocurrency and other digital assets with your contacts
                within the app. Whether you are sending a gift or just want to
                share a digital asset, our app makes it easy to do so on the go!
              </div>
            </div>
            <div
              class="m-[16px] rounded-3xl border-[1px] border-[#ffffff1a] bg-[#ffffff0d] p-[24px] text-center md:w-[340px] md:text-left xl:w-[380px]"
            >
              <div
                class="md:leading-40px mx-auto mb-[28px] flex items-center justify-center text-xl font-semibold text-[#ffffffde] md:text-2xl xl:justify-start"
              >
                <img
                  src="../assets/Nft.png"
                  alt=""
                  class="mr-3 md:h-[48px] md:w-[48px]"
                />NFT PFP
              </div>
              <div class="text-sm font-normal leading-6">
                Aardvark messenger app allows you to use non-fungible tokens
                (NFTs) as your profile picture. This is especially useful if you
                want to use unique or one-of-a-kind digital assets to represent
                yourself within the app.
              </div>
            </div>
            <div
              class="m-[16px] rounded-3xl border-[1px] border-[#ffffff1a] bg-[#ffffff0d] p-[24px] text-center md:w-[340px] md:text-left xl:w-[380px]"
            >
              <div
                class="md:leading-40px mx-auto mb-[28px] flex items-center justify-center text-xl font-semibold text-[#ffffffde] md:text-2xl xl:justify-start"
              >
                <img
                  src="../assets/community.png"
                  alt=""
                  class="mr-3 md:h-[48px] md:w-[48px]"
                />Secure Communities
              </div>
              <div class="text-sm font-normal leading-6">
                Within the community feature, you can join groups or forums
                based on your interests and participate in discussions with
                other members. You can also start your own group or forum and
                invite others to join.
              </div>
            </div>
            <div
              class="m-[16px] rounded-3xl border-[1px] border-[#ffffff1a] bg-[#ffffff0d] p-[24px] text-center md:w-[340px] md:text-left xl:w-[380px]"
            >
              <div
                class="md:leading-40px mx-auto mb-[28px] flex items-center justify-center text-xl font-semibold text-[#ffffffde] md:text-2xl xl:justify-start"
              >
                <img
                  src="../assets/Missions.png"
                  alt=""
                  class="mr-3 md:h-[48px] md:w-[48px]"
                />Aardvark missions
              </div>
              <div class="text-sm font-normal leading-6">
                Aardvark messenger includes a missions feature that allows you
                to complete tasks and earn rewards. These missions can be as
                simple as inviting a friend to join the app or sharing a piece
                of content, or they can be more complex and require you to
                complete multiple steps.
              </div>
            </div>
          </div>
        </div>

        <img
          src="../assets/bgright.png"
          class="absolute right-0 -z-30 h-[1200px] md:h-auto"
        />

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
          <div class="mt-[36px]">
            <div>
              <img
                src="../assets/supportedmobile.png"
                alt="aadvark"
                class="mx-auto sm:hidden"
              />
            </div>
            <div>
              <img
                src="../assets/supportdesktop.png"
                alt="aadvark"
                class="mx-auto hidden max-h-[687px] sm:block"
              />
            </div>
          </div>
          <div
            class="mt-[75px] mb-[140px] text-center md:mt-[90px] md:mb-[160px]"
          >
            <DappButton />
          </div>
        </div>

        <!-- contact us -->
        <div
          id="contact"
          class="mt-[8px] rounded-lg bg-gradient-to-tr from-[#db00fb] to-[#ff6000] px-[16px] pt-[1px] pb-[46px] sm:px-[48px]"
        >
          <div class="mt-[38px]"><SubHeading>contact us</SubHeading></div>
          <div
            class="mx-auto text-center text-sm font-normal leading-6 text-[#ffffffde] md:w-[600px]"
          >
            Please email info@aardvark.sh for any complaints or request and
            we’ll get back to you as fast as we can.
          </div>
          <div class="mt-[42px] flex justify-center">
            <img src="../assets/ctwitter.png" alt="aardvark" class="mr-3" />
            <img src="../assets/cgithub.png" alt="aardvark" class="mr-3" />
            <img src="../assets/cdiscord.png" alt="aardvark" />
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
