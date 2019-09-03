<template>
  <div class="proximamente-container">
    <h2 class="proximamente-title">Proximamente</h2>
    <movies-showcase :movies="movies"></movies-showcase>
  </div>
</template>

<script>
import showMovies from '../components/showMovies'
export default {
  name: 'proximamente',
  props: ['movies'],
  components: {
    'movies-showcase': showMovies
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .proximamente-container {
    color: white;
    background-color: black;
    padding-left: 10%;
    padding-right: 10%;
  }

  .proximamente-title {
    width: 121px;
    height: 24px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  }
</style>
