<template>
  <div class="popular-container">
    <h2 class="popular-title"><strong>POPULARES DE LITEFLIX</strong></h2>
    <movies-showcase :movies="movies" :type="type"></movies-showcase>
  </div>
</template>

<script>
import showMovies from '../components/showMovies'
export default {
  name: 'popularMovies',
  props: ['movies', 'type'],
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
  h2 {
    width: 256px;
    font-family: 'Montserrat', sans-serif;
    font-size: 19px;
    color: white;
    padding-bottom: 9px;
  }
</style>
