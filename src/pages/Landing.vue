<template>
  <div class="homepage-container">
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from './Navbar'

export default {
  name: 'Homepage',
  components: {
    navbar
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .homepage-container {
    padding-left: 10%;
    padding-right: 10%;
  }
</style>
