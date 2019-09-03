<template>
  <div class="proximamente-container">
    <template v-for="(movie, i) in movies">
      <div v-bind:key="i">
        <img :src="getPic(movie.backdrop_path)" width="255" height="155">
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'showMovies',
  props: ['movies'],
  data () {
    return {

    }
  },
  methods: {
    getPic(url) {
      return 'https://image.tmdb.org/t/p/w500/' + url;s
    }
  }
}
</script>

<style lang="scss" scoped>

.proximamente-container {
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>
