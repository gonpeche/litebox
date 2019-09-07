<template>
  <div class="proximamente-container">
    <h2 class="proximamente-title">Proximamente</h2>
    <movies-showcase :movies="movies" :type="type"></movies-showcase>
  </div>
</template>

<script>
import showMovies from '../components/showMovies'
export default {
  name: 'proximamente',
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
  .proximamente-container {
    padding: 0;
    margin: 0;
    color: white;
    margin-top: 90px;
  }

  .proximamente-title {
    margin-bottom: 20.3px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  }
// MOBILE

@media only screen and (max-width: 600px) {
  .proximamente-container {
    margin-top: 32px;
    margin-left: 15px;
  }

}


</style>
