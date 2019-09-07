<template>
  <div class="showmovies-container">
    <template v-for="(movie, i) in movies">
      <div v-bind:key="i" @mouseover="showByIndex = i" @mouseout="showByIndex = null" class="ancestor">
        <img :src="getPic(movie)" width="255" :height="getHeight()" class="image">

        <div class="movieHovered" v-show="showByIndex === i">
            <img class="add-btn" src="../assets/add-list.svg" alt="">
            <img class="like-btn" src="../assets/like-hovered.svg" alt="">
            <img class="play-btn" src="../assets/play.svg" alt="">
            <img class="arrow-hover" src="../assets/arrow_hover.svg" alt="">
        </div>

      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'showMovies',
  props: ['movies'],
  data () {
    return {
      showByIndex: null
    }
  },
  methods: {
    getType() {
      if (this.$attrs.type === 'upcoming') {
        return true
      }
    },
    getPic(url) {
      if (this.$attrs.type === 'upcoming') {
        return 'https://image.tmdb.org/t/p/w500/' + url.backdrop_path;
      } else {
        return 'https://image.tmdb.org/t/p/w500/' + url.poster_path;
      }
    },
    getHeight() {
      if (this.$attrs.type === 'upcoming') {
        return 155
      } else {
        return 450
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.showmovies-container {
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.ancestor {
  position: relative;
  cursor: pointer;
}

.movieHovered {
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 50%;
  left: 50%;
  color: white;
  transition: .5s ease;
  opacity: 0;
}

.image {
  opacity: 1;
  transition: .5s ease;
}

.showmovies-container:hover .movieHovered{
  opacity: 1;
}

.showmovies-container:hover .add-btn{
  opacity: 1;
}

.ancestor:before {
  content: '';
  display: block;
  position: absolute;
  height: 0%;
  width: 100%;
  bottom: 0;
  transition: height 0.2s ease-out;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}
.ancestor:hover:before {
  height: 100%;
}

.add-btn {
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 50%;
  left: 50%;
  color: white;
  transition: .5s ease;
  opacity: 0;
}

</style>
