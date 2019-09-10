<template>
  <div class="addedMovies-container">
    <div class="title">{{category}}</div>
    <div class="movies">
      <template v-for="(movie, i) in catalog">
        <div
          v-bind:key="i"
          v-if="movie.category === category"
          @mouseover="showByIndex = i"
          @mouseout="showByIndex = null"
          class="movie-wrapper"
        >
            <img v-lazy="getRandomPic(i)" width="255" height="155" class="image" alt="movie"/>
            <div v-show="showByIndex === i">
              <img class="add-btn" src="../assets/add-list.svg" alt="add" />
              <img class="like-btn" src="../assets/like-hovered.svg" alt="like" />
              <img class="play-btn" src="../assets/play.svg" alt="play" />
              <div class="movie-wrapper-footer">
                <div class="movie-wrapper-footer-title">{{movie.name}}</div>
                <div class="movie-wrapper-footer-body">
                  <div>
                    <span>98% Coincidencia</span>
                    <div class="badge-wrapper">
                      <span class="badge">16+</span>
                    </div>
                    <span>1h 30 min</span>
                  </div>
                  <div>Suspenso</div>
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
  name: 'showAddedMovies',
  props: ['category', 'catalog'],
  data() {
    return {
      showByIndex: null
    };
  },
  methods: {
    getRandomPic(index) {
      return `https://picsum.photos/id/1${index}/255/155?blur=1`
    }
  }
}
</script>

<style lang="scss" scoped>

.addedMovies-container {
  padding-top: 35px;
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
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: -19px;
  margin-right: -19px;
}

.movie-wrapper {
  position: relative;
  transition: 0.5s ease;
  opacity: 1;
  cursor: pointer;
  margin-left: 17px;
  margin-right: 17px;
  margin-bottom: 17px;

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
    left: 43%;
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
  .addedMovies-container {
    margin-top: 32px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .title {
    margin: 0;
  }

  .movies {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .movie-wrapper {
    margin: 0;
    padding: 0;
  }
  .movie {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  img {
    width: 100%;
    padding-top: 14px;
  }
}

</style>
