<template>
  <div class="showmovies-container">
    <template v-for="(movie, i) in movies">
      <div v-bind:key="i">
        <img :src="getPic(movie)" width="255" :height="getHeight()">
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
      if (this.$attrs.type === 'upcoming') {
        return 'https://image.tmdb.org/t/p/w500/' + url.backdrop_path;
      } else {
        return 'https://image.tmdb.org/t/p/w500/' + url.poster_path;
      }
    },
    getHeight() {
      if (this.$attrs.type === 'upcoming') {
        return 155
      } else {
        return 509
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.showmovies-container {
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>
