<template>
  <div class="proximamente-container">
    <h2 class="proximamente-title">Próximamente</h2>

    <div class="movies-wrapper">
      <template v-for="(movie, i) in movies">
        <div
          v-bind:key="i"
          @mouseover="showByIndex = i"
          @mouseout="showByIndex = null"
          class="image-wrapper"
        >
          <img v-lazy="getPic(movie)" width="255" height="155" class="image" >
          <!-- <img :src="getPic(movie)" width="255" height="155" class="image" /> -->

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
  name: "proximamente",
  props: ["movies", "type"],
  components: {},
  data() {
    return {
      showByIndex: null
    };
  },
  methods: {
    getPic(movie) {
      return "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
    }
  }
};
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

.movies-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

// MOBILE

@media only screen and (max-width: 600px) {
  .proximamente-container {
    margin-top: 32px;
    padding-left: 8%;
    padding-right: 8%;
  }

  .proximamente-title {
    margin: 0;
  }

  .image-wrapper {
    margin-top: 10px;
  }
  .image {
    width: 100%;
  }
}
</style>
