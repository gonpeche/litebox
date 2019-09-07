<template>
  <div class="addedMovies-container">
    <h1>{{category}}</h1>
    <template v-for="(movie,i) in catalog">
        <div v-bind:key="i" v-if="movie.category === category">{{ movie.name }}</div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'showAddedMovies',
  props: ['category', 'catalog'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>
