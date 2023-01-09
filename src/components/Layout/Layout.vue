<template>
    <Header />
    <slot />
    <Footer />
</template>

<script lang="ts">
import Header from './Header/Header.vue'
import Footer from './Footer/Footer.vue'

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>