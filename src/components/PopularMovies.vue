<template>
  <div class="popular-container">
    <h2 class="popular-title">
      <strong>POPULARES DE LITEFLIX</strong>
    </h2>
    <div class="movies-wrapper">
      <template v-for="(movie, i) in movies">
        <div
          v-bind:key="i"
          @mouseover="showByIndex = i"
          @mouseout="showByIndex = null"
          class="image-wrapper"
        >
          <img :src="getPic(movie)" width="255" height="450" class="image" />

          <!-- <div class="movieHovered" v-show="showByIndex === i">
              <img class="add-btn" src="../assets/add-list.svg" alt="">
              <img class="like-btn" src="../assets/like-hovered.svg" alt="">
              <img class="play-btn" src="../assets/play.svg" alt="">
              <img class="arrow-hover" src="../assets/arrow_hover.svg" alt="">
          </div>-->
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import showMovies from "../components/showMovies";
export default {
  name: "popularMovies",
  props: ["movies", "type"],
  components: {},
  data() {
    return {
      showByIndex: null
    };
  },
  methods: {
    getPic(movie) {
      return "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    }
  }
};
</script>

<style lang="scss" scoped>

.popular-title {
  margin-top: 40px;
}

.movies-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

h2 {
  width: 256px;
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  color: white;
  padding-bottom: 9px;
  margin: 0;
}

// MOBILE

@media only screen and (max-width: 600px) {
  .popular-container {
    padding-left: 8%;
    padding-right: 8%;
  }

  .image-wrapper {
    // border: 1px solid red;
    width: 50%;
    margin-top: 10px;
  }
  .image {
    // border: 1px solid blue;
    height: 320px;
    // width: 160px;
    width: 98%
  }

}
</style>
