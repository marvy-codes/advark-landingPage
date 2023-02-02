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
          class="mt-[168px] text-center text-[40px] font-bold leading-[64px] text-white md:mt-[240px] lg:text-[64px]"
        >
          Privacy policy
        </h1>

        <div class="mx-auto">
          <h2
            class="mt-[80px] mb-[16px] text-center text-[24px] font-semibold leading-[24px] text-[#ffffffde] md:text-left md:leading-[40px]"
          >
            Updated 6/30/2022
          </h2>
          <p class="mt-[14px] mb-[14px]">
            Your privacy is important to us. It is Aardvark Technologies LLC's
            policy to respect your privacy regarding any information we may
            collect from you across our website, https://app.aardvark.sh, and
            other sites we own and operate.
          </p>
          <p class="mt-[14px] mb-[14px]">
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </p>
          <p class="mt-[14px] mb-[14px]">
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </p>
          <p class="mt-[14px] mb-[14px]">
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </p>
          <p class="mt-[14px] mb-[14px]">
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
          </p>
          <p class="mt-[14px] mb-[14px]">
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </p>
          <p class="mt-[14px] mb-[14px]">
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us.
          </p>
          <p class="mt-[14px] mb-[14px]">
            This policy is effective as of 30 June 2022.
          </p>
        </div>
      </div>
    </PageLayout>
  </div>
</template>

<script>
import PageLayout from '@/components/Layout/PageLayout.vue';
export default {
  name: 'PrivacyView',
  components: {
    PageLayout,
  },
};
</script>
