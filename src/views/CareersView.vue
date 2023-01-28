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
          Aardvark Careers
        </h1>
        <div
          class="mt-[32px] text-center text-sm leading-[22px] lg:mx-auto lg:w-[700px] lg:text-base lg:font-normal lg:leading-6"
        >
          We are constantly seeking more talented people to help us out and take
          us to the next level. If that's you, take a look at open positions
          below.
        </div>

        <h2
          class="mt-[64px] mb-[16px] text-center text-[24px] font-semibold leading-[24px] text-[#ffffffde] md:text-left md:leading-[40px]"
        >
          Engineering
        </h2>
        <p class="mt-[32px] text-center md:text-left">
          No open positions, check back later
        </p>

        <h2
          class="mt-[44px] mb-[16px] text-center text-[24px] font-semibold leading-[24px] text-[#ffffffde] md:text-left md:leading-[40px]"
        >
          Marketing
        </h2>
        <div
          class="mx-auto rounded-3xl border-2 border-[#ffffff1a] bg-[#151315] p-[24px]"
        >
          <h2
            class="custom_text_gradient mx-auto text-center text-[24px] font-bold md:text-left"
          >
            Marketing Specialist
          </h2>
          <div class="">
            Aardvark messenger is designed to be easy to use, no matter your
            level of technical expertise. With a simple and intuitive interface,
            you can start chatting with your friends and family in just a few
            taps.
          </div>
        </div>

        <h2
          class="mt-[44px] mb-[16px] text-center text-[24px] font-semibold leading-[24px] text-[#ffffffde] md:text-left md:leading-[40px]"
        >
          Business Development
        </h2>
        <div
          class="mx-auto rounded-3xl border-2 border-[#ffffff1a] bg-[#151315] p-[24px]"
        >
          <h2
            class="custom_text_gradient mx-auto text-center text-[24px] font-bold md:text-left"
          >
            Head of Business Development
          </h2>
          <div class="">
            This is an early and crucial position, allowing the candidate to get
            in on the ground floor of a potential game changing startup. The
            ideal candidate loves making and building strong relationships that
            benefit everyone involved. Experience in crypto, or software
            business development or sales is a must. This position will own all
            partnerships and strategic collaborations going forward.
          </div>
        </div>

        <h2
          class="mt-[44px] mb-[16px] text-center text-[24px] font-semibold leading-[24px] text-[#ffffffde] md:text-left md:leading-[40px]"
        >
          Community
        </h2>
        <div
          class="mx-auto rounded-3xl border-2 border-[#ffffff1a] bg-[#151315] p-[24px]"
        >
          <h2
            class="custom_text_gradient mx-auto text-center text-[24px] font-bold md:text-left"
          >
            Discord moderators
          </h2>
          <div class="">
            We are looking for a number of discord moderators to help guide and
            protect our loyal community.
          </div>
        </div>
        <p class="mt-[72px] mb-[64px] md:mt-[106px] md:mb-[80px]">
            Even if you don't see an open position below that fits you, we'd
            love to hear from you and learn more about you! Please feel free to
            send your resume or applicable credentials along to
            <a href="mailto:info@aardvark.sh!" class="text-white">info@aardvark.sh!</a>

            
          </p>
      </div>
    </PageLayout>
  </div>
</template>

<script>
import PageLayout from '@/components/Layout/PageLayout.vue';
export default {
  name: 'CareersView',
  components: {
    PageLayout,
  },
};
</script>
