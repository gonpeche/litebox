<template>
  <div class="added">
    <template v-for="(movie, i) in getCatalog">
      <div v-bind:key="i">
        <p>{{movie.name}}</p>
      </div>
    </template>
  </div>
</template>

<script>
// import ShowMovies from '../components/ShowMovies'

export default {
  name: 'added-manually',
  data() {
    return {
      catalog: []
    }
  },
  computed: {
    getCatalog() {
      return this.$store.state.catalog
    }
  },

}
</script>

<style lang="scss" scoped>
.added {
  color: white;
}
</style>
