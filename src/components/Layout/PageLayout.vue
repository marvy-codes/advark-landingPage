<template>
  <HeaderView />
  <slot />
  <FooterView />
</template>

<script lang="ts">
import HeaderView from './Header/HeaderView.vue';
import FooterView from './Footer/FooterView.vue';

export default {
  name: 'PageLayout',
  components: {
    HeaderView,
    FooterView,
  },
};
</script>
