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
          <div class="movie-wrapper">
            <img v-lazy="getPic(movie)" width="255" height="450" class="image" />
            <div v-show="showByIndex === i">
              <img class="like-btn" src="../assets/like-hovered.svg" alt />
              <img class="play-btn" src="../assets/play.svg" alt />
              <img class="arrow-hover" src="../assets/arrow_hover.svg" alt />
              <div class="movie-wrapper-footer">
                <div class="movie-wrapper-footer-title">{{movie.title}}</div>
                <div class="movie-wrapper-footer-body">
                  <div>
                    <span>98% Coincidencia</span>
                    <div class="movie-wrapper-footer-body-middle">
                      <div class="badge-wrapper">
                        <span class="badge">16+</span>
                      </div>
                      <span class="timer">1h 30 min</span>
                    </div>
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
  name: "popularMovies",
  props: ["movies", "type"],
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

// STYLES ON HOVER
.movie-wrapper {
  position: relative;
  transition: 0.5s ease;
  opacity: 1;
  cursor: pointer;

  .like-btn {
    position: absolute;
    top: 6%;
    left: 84%;
  }

  .play-btn {
    position: absolute;
    top: 38%;
    left: 43%;
  }

  .arrow-hover {
    position: absolute;
    top: 91%;
    left: 43%;
  }

  &-footer {
    position: absolute;
    top: 73%;
    left: 2%;
    color: white;

    &-title {
      font-size: 16px;
      font-weight: 700;
    }

    &-body {
      font-size: 12px;
      font-weight: 300;
      letter-spacing: 0;

      &-middle {
        display: flex;
      }

      .badge-wrapper {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        width: 27px;
      }

      .badge {
        padding-left: 5px;
      }

      .time {
        padding-top: 1px;
      }
    }
  }
}

.movie-wrapper:before {
  content: "";
  display: block;
  position: absolute;
  height: 0%;
  width: 100%;
  bottom: 0;
  transition: height 0.2s ease-out;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.9)
  );
}

.movie-wrapper:hover:before {
  height: 100%;
}

// MOBILE
@media only screen and (max-width: 600px) {
  .popular-container {
    padding-left: 14px;
    padding-right: 14px;
  }

  .image-wrapper {
    width: 50%;
    margin-top: 10px;
  }
  .image {
    height: 320px;
    width: 98%;
  }
}
</style>
