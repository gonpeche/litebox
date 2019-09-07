<template>
  <div class="addedMovies-container">
    <div class="title">{{category}}</div>
    <div class="movies">
      <template v-for="(movie,i) in catalog">
          <div v-bind:key="i" v-if="movie.category === category" class="movie">{{ movie.name }}</div>
      </template>
    </div>
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
.addedMovies-container {
  padding-top: 30px;
}

.title {
  height: 24px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: bold;
}

.movies {
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  flex-wrap: wrap;
}

.movie {
  background-color: rgb(122, 121, 121);
  margin-top: 20px;
  width: 255px;
  height: 155px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.movie:nth-child(1) {
  margin-right: 31px;
}

.movie:nth-child(2) {
  margin-right: 31px;
}

.movie:nth-child(3) {
  margin-right: 31px;
}
</style>
