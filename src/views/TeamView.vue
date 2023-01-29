<template>
  <div>
    <PageLayout>
      <!-- Hero -->
      <div>
        <!-- background images -->
        <div class="">
          <img
            src="../assets/background.png"
            class="absolute top-0 -z-40 h-screen md:left-0 md:-ml-[40px]"
          />
          <img
            src="../assets/background.png"
            class="absolute top-0 right-0 -z-40 mr-[0px] hidden h-screen md:block"
          />
        </div>
        <!--  -->
        <h1
          class="text-center text-[40px] font-bold leading-[64px] text-white lg:text-[64px]"
        >
          MEET THE TEAM
        </h1>

        <!-- cards -->
        <div class="mt-12 md:mt-28">
          <div
            class="justify-betwee mx-auto flex-row-reverse rounded-3xl border-2 border-[#ffffff1a] bg-[#151315] px-4 md:w-[600px] lg:flex lg:max-h-[470px] lg:w-auto"
          >
            <div
              class="text-center lg:ml-[78px] lg:mb-[110px] lg:w-[700px] lg:-translate-x-24 lg:text-left"
            >
              <div class="mt-[24px] px-[14px] xl:mt-[50px]">Founder</div>
              <div class="items-center justify-between lg:flex">
                <div>
                  <h2
                    class="custom_text_gradient mx-auto w-[320px] px-[14px] text-[32px] font-bold sm:w-auto md:w-auto"
                  >
                    Joey Ritcher
                  </h2>
                </div>
                <a href="https://aardvark.sh/" class="mt-4 lg:mt-[0px]">
                  <img
                    src="../assets/twitter.svg"
                    class="inline h-[32px] w-[32px]"
                  /><span class="custom_text_gradient ml-3 font-bold"
                    >JoeyRitcher</span
                  >
                </a>
              </div>
              <div class="mt-[16px] px-[14px]">
                Joey is an experienced engineer that has a diverse background in
                various technologies. He has worked with large Fortune 300
                companies, medium-sized private companies, and technology
                startups. His proficiencies in databases, APIs, and web/mobile
                applications combined with a strong passion for Web3 and
                blockchain helped Joey co-found Aardvark Technologies to tackle
                some of the missing elements in the ecosystem that will lead to
                mainstream adoption.
              </div>
            </div>
            <div class="relative overflow-hidden rounded-3xl md:w-[600px]">
              <img
                class="-top-18 xl:absolute"
                src="../assets/tm3.png"
                alt="encryption"
              />
            </div>
          </div>
        </div>

        <div class="mt-2 md:mt-6">
          <div
            class="justify-betwee mx-auto rounded-3xl border-2 border-[#ffffff1a] bg-[#151315] px-4 md:w-[600px] lg:flex lg:max-h-[470px] lg:w-auto"
          >
            <div
              class="text-center lg:mb-[110px] lg:w-[700px] lg:-translate-x-24 lg:pl-[120px] lg:text-left"
            >
              <div class="mt-[24px] px-[14px] xl:mt-[50px]">Co-Founder</div>
              <div class="items-center justify-between lg:flex">
                <div>
                  <h2
                    class="custom_text_gradient mx-auto w-[320px] px-[14px] text-[32px] font-bold sm:w-auto md:w-auto"
                  >
                    Austin Zurfluh
                  </h2>
                </div>
                <a href="https://aardvark.sh/" class="mt-4 lg:mt-[0px]">
                  <img
                    src="../assets/twitter.svg"
                    class="inline h-[32px] w-[32px]"
                  /><span class="custom_text_gradient ml-3 font-bold"
                    >Austin Zurfluh</span
                  >
                </a>
              </div>
              <div class="mt-[16px] px-[14px]">
                Austin is a software engineer by trade with 10 years experience
                working for Fortune 250 companies and very small startups in the
                fintech and insurance spaces. He has led and managed teams of
                more than 25 members across a number of products to market
                success. Austin has been a founder in multiple successful
                products, apps and games over the years.
              </div>
            </div>
            <div class="relative overflow-hidden rounded-3xl md:w-[600px]">
              <img
                class="-top-18 xl:absolute"
                src="../assets/tm1.png"
                alt="encryption"
              />
            </div>
          </div>
        </div>

        <div class="mt-2 md:mt-6">
          <div
            class="justify-betwee mx-auto flex-row-reverse rounded-3xl border-2 border-[#ffffff1a] bg-[#151315] px-4 md:w-[600px] lg:flex lg:max-h-[470px] lg:w-auto"
          >
            <div
              class="text-center lg:ml-[78px] lg:mb-[110px] lg:w-[700px] lg:-translate-x-24 lg:text-left"
            >
              <div class="mt-[24px] px-[14px] xl:mt-[50px]">
                Community Manager
              </div>
              <div class="items-center justify-between lg:flex">
                <div>
                  <h2
                    class="custom_text_gradient mx-auto w-[320px] px-[14px] text-[32px] font-bold sm:w-auto md:w-auto"
                  >
                    Claire Buscato
                  </h2>
                </div>
                <a href="https://aardvark.sh/" class="mt-4 lg:mt-[0px]">
                  <img
                    src="../assets/twitter.svg"
                    class="inline h-[32px] w-[32px]"
                  /><span class="custom_text_gradient ml-3 font-bold"
                    >Claire Buscato</span
                  >
                </a>
              </div>
              <div class="mt-[16px] px-[14px]">
                Claire is currently based in the Philippines and is an IRL
                recruiter for 2 known online marketplace talent platforms. A
                registered nurse by profession however, she’s currently into
                talent acquisition and customer service. Her interest on
                cryptocurrency and NFTs started when she noticed a sudden peak
                of NFT related jobs on the online marketplace in late 2021. She
                studied it for a bit and ultimately joined the space early of
                this year. Her love for helping out people and listening to
                their stories made moderation on NFT projects a perfect fit for
                her. Experienced in moderation on upcoming NFT projects, she is
                currently Aardvark Technologies’ Community Manager.
              </div>
            </div>
            <div class="relative overflow-hidden rounded-3xl md:w-[600px]">
              <img
                class="-top-18 xl:absolute"
                src="../assets/tm2.png"
                alt="encryption"
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  </div>
</template>

<script>
import PageLayout from '@/components/Layout/PageLayout.vue';
import SubHeading from '@/components/utils/SubHeading.vue';

export default {
  name: 'TeamView',
  components: {
    PageLayout,
    SubHeading,
  },
};
</script>
