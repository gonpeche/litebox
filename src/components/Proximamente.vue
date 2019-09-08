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
        <div class="movie-wrapper">
          <img v-lazy="getPic(movie)" width="255" height="155" class="image" >
          <!-- <div class="movie-wrapper-icons" > -->
              <img v-show="showByIndex === i" class="add-btn" src="../assets/add-list.svg" alt="">
              <img v-show="showByIndex === i" class="like-btn" src="../assets/like-hovered.svg" alt="">
              <img v-show="showByIndex === i" class="play-btn" src="../assets/play.svg" alt="">
              <img v-show="showByIndex === i" class="arrow-hover" src="../assets/arrow_hover.svg" alt="">
          <!-- </div> -->
        </div>
          <!-- <img :src="getPic(movie)" width="255" height="155" class="image" /> -->

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

.movie-wrapper {
  border: 1px solid red;
  position: relative;

  .add-btn {
    position: absolute;
    top: 5%;
    left: 67%;
  }

  .like-btn {
    position: absolute;
    top: 6%;
    left: 84%;
  }

  .play-btn {
    position: absolute;
    top: 38%;
    left: 43%
  }

  .arrow-hover {
    position: absolute;
    top: 108%;
    left: 43%;
  }
  // &-icons img {
  //   border: 1px solid green;
  //   position: absolute;

  //   .add-btn {
  //     position: relative;
  //     top: 10px;
  //   }
  // }
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
