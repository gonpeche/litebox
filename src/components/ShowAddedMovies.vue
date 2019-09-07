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
  margin-left: -15px;
  margin-right: -15px;
}

.title {
  height: 24px;
  margin-left: 15px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: bold;
}

.movies {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.movie {
  background-color: rgb(122, 121, 121);
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 20px;
  width: 255px;
  height: 155px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

// MOBILE

@media only screen and (max-width: 600px) {
  .addedMovies-container {
    margin-top: 32px;
    padding-left: 10%;
    padding-right: 10%;
  }

  .title {
    margin: 0;
    // padding-left: 2%;
  }

  .movies {
    margin-top: 10px;
  }
  .movie {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}

</style>
