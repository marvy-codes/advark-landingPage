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
        </div>
      </PageLayout>
    </div>
  </template>
  
  <script>
  import PageLayout from '@/components/Layout/PageLayout.vue';
  export default {
    name: 'TermsView',
    components: {
      PageLayout,
    },
  };
  </script>
  