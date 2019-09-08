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
          <div v-show="showByIndex === i">
            <img class="add-btn" src="../assets/add-list.svg" alt="">
            <img class="like-btn" src="../assets/like-hovered.svg" alt="">
            <img class="play-btn" src="../assets/play.svg" alt="">
            <img class="arrow-hover" src="../assets/arrow_hover.svg" alt="">
            <div class="movie-wrapper-footer">
              <div class="movie-wrapper-footer-title">{{movie.title}}</div>
              <div class="movie-wrapper-footer-body">
                <div>
                  <span>98% Coincidencia</span> <div class="badge-wrapper"><span class="badge">16+</span></div> <span>1h 30 min</span>
                </div>
                <div>Suspenso</div>
              </div>
            </div>
          </div>
        </div>

        </div>
      </template>
    </div>
  </div>
</template>

<script>
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
  position: relative;
  transition: .5s ease;
  opacity: 1;
  cursor: pointer;

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

  &-footer {
    position: absolute;
    top: 62%;
    left: 2%;

    &-title {
      font-size: 16px;
      font-weight: 700;
    }

    &-body {
      font-size: 12px;
      font-weight: 300;
      letter-spacing: 0;

      .badge-wrapper {
        display: inline-block;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        width: 27px;
      }
      .badge {
        padding-left: 6px;
        font-size: 10px;
        color: white;
        font-weight: 100;
      }
    }
  }
}

.movie-wrapper:before {
  content: '';
  display: block;
  position: absolute;
  height: 0%;
  width: 100%;
  bottom: 0;
  transition: height 0.2s ease-out;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
}

.movie-wrapper:hover:before {
  height: 100%;
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
