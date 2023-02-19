<template>
    <div class="mt-[20px] mb-[40px] md:mt-[32px]">
              <vueper-slides
                :arrows="false"
                :slide-content-outside="false"
                class="no-shadow"
              >
                <VueperSlide :key="1">
                  <template #content>
                    <div class="mx-[12px] my-[10px] w-auto translate-y-[20px]">
                      <div
                        class="h-[200px] rounded-[16px] border-[1px] border-[#ffffff1a] bg-[#ffffff14] p-[24px] text-left sm:min-h-[186px]"
                      >
                        <div class="mb-[12px] flex justify-start">
                          <div class="mr-[8px]">
                            <img src="../../assets/comp5.svg" alt="aadvark" />
                          </div>
                          <h1
                            class="custom_text_gradient text-left text-[20px] font-semibold"
                          >
                            Wallet based notification
                          </h1>
                        </div>
                        <div class="text-[14px] font-normal leading-[22px]">
                          Send notifications to users based on wallet public
                          keys. Keep users engaged and interested in your value
                          proposition by providing timely and actionable
                          notifications and insights.
                        </div>
                      </div>
                    </div>
                  </template>
                </VueperSlide>
                <VueperSlide :key="2">
                  <template #content>
                    <div class="mx-[12px] my-[10px] w-auto translate-y-[20px]">
                      <div
                        class="h-[200px] rounded-[16px] border-[1px] border-[#ffffff1a] bg-[#ffffff14] p-[24px] text-left sm:min-h-[186px]"
                      >
                        <div class="mb-[12px] flex justify-start">
                          <div class="mr-[8px]">
                            <img src="../../assets/comp6.svg" alt="aadvark" />
                          </div>
                          <h1
                            class="custom_text_gradient text-left text-[20px] font-semibold"
                          >
                            Community channels
                          </h1>
                        </div>
                        <div class="text-[14px] font-normal leading-[22px]">
                          Create channels to allow your community to rally
                          behind your product and improve activation, retention
                          and engagement by giving your users a sense of
                          community in app. Harness the power of your community.
                        </div>
                      </div>
                    </div>
                  </template>
                </VueperSlide>
                <VueperSlide :key="3">
                  <template #content>
                    <div class="mx-[12px] my-[10px] w-auto translate-y-[20px]">
                      <div
                        class="h-[200px] rounded-[16px] border-[1px] border-[#ffffff1a] bg-[#ffffff14] p-[24px] text-left sm:min-h-[186px]"
                      >
                        <div class="mb-[12px] flex justify-start">
                          <div class="mr-[8px]">
                            <img src="../../assets/comp7.svg" alt="aadvark" />
                          </div>
                          <h1
                            class="custom_text_gradient text-left text-[20px] font-semibold"
                          >
                            Direct Messages
                          </h1>
                        </div>
                        <div class="text-[14px] font-normal leading-[22px]">
                          Messages between users or wallets make in-app/dapp
                          communication, trading and community building easy to
                          facilitate. Allow users contact each other, and
                          facilitate transactions directly in your app.
                        </div>
                      </div>
                    </div>
                  </template>
                </VueperSlide>
                <VueperSlide :key="4">
                  <template #content>
                    <div class="mx-[12px] my-[10px] w-auto translate-y-[20px]">
                      <div
                        class="h-[200px] rounded-[16px] border-[1px] border-[#ffffff1a] bg-[#ffffff14] p-[24px] text-left sm:min-h-[186px]"
                      >
                        <div class="mb-[12px] flex justify-start">
                          <div class="mr-[8px]">
                            <img src="../../assets/comp8.svg" alt="aadvark" />
                          </div>
                          <h1
                            class="custom_text_gradient text-left text-[20px] font-semibold"
                          >
                            Moderation
                          </h1>
                        </div>
                        <div class="text-[14px] font-normal leading-[22px]">
                          Bans, deleted messages and more! Aardvark gives
                          community managers and moderators control over the
                          content and messages being sent in game,and protect
                          your community.
                        </div>
                      </div>
                    </div>
                  </template>
                </VueperSlide>
              </vueper-slides>
            </div>
</template>

<script>

import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
  name: 'CardSlide2',
  components: {
    VueperSlides,
    VueperSlide,
  },
};

</script>


<style>
.vueperslide__content-wrapper {
  height: 200px;
}

.vueperslides__bullet .default {
  background-color: rgba(255, 255, 255, 0.11);
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 16px;
  height: 16px;
}
.vueperslides__parallax-wrapper {
  height: 300px;
}

@media (min-width: 400px) {
  .vueperslides__parallax-wrapper {
    height: 280px;
  }
}

@media (min-width: 580px) {
  .vueperslides__parallax-wrapper {
    height: 260px;
  }
}
@media (min-width: 880px) {
  .vueperslides__parallax-wrapper {
    height: 255px;
  }
}
@media (min-width: 940px) {
  .vueperslides__parallax-wrapper {
    height: 235px;
  }
}

.vueperslides__bullet{
    margin-top: -70px;
}

.vueperslides__bullet--active .default {
  background-color: #ffffff;
}

.vueperslides__bullet span {
  display: block;
  color: #fff;
  font-size: 10px;
  opacity: 0.8;
}
</style>