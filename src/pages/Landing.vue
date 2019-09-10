<template>
  <div class="homepage-container" v-bind:style="{ 'background-image': featuredMovie.image }">
    <navbar></navbar>

    <template v-if="loading">
      <infinite-loading spinner="circles" class="loading"></infinite-loading>
    </template>

    <template v-if="!loading">
      <main-content :featuredMovie="featuredMovie"></main-content>
      <proximamente :movies="upcomingMovies" type="upcoming"></proximamente>
      <popular-movies :movies="popularMovies" type="popular"></popular-movies>
      <added-manually></added-manually>
    </template>

  </div>
</template>

<script>
import navbar from "../components/Navbar";
import mainContent from "../components/Main";
import proximamente from "../components/Proximamente";
import popularMovies from "../components/PopularMovies";
import addedManually from "../components/AddedManually";

import axios from "axios";
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "Homepage",
  components: {
    navbar,
    InfiniteLoading,
    "main-content": mainContent,
    "popular-movies": popularMovies,
    "added-manually": addedManually,
    proximamente
  },
  data() {
    return {
      upcomingMovies: [],
      popularMovies: [],
      featuredMovie: [],
      loading: true
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      let allUpcomingMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=6f26fd536dd6192ec8a57e94141f8b20"
      );
      let allPopularMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
      );
      let allFeaturedMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
      );

      let upcomingMovies = this.filterOnlyFourMovies(allUpcomingMovies.data.results);
      let popularMovies = this.filterOnlyFourMovies(allPopularMovies.data.results);
      let featuredMovie = this.filterFeaturedMovie(allFeaturedMovies);

      this.upcomingMovies = upcomingMovies;
      this.popularMovies = popularMovies;
      this.featuredMovie = featuredMovie;

      this.loading = false;
    },
    filterFeaturedMovie(allFeaturedMovies) {
      // get the latest movie
      let movies = movie.data.results;
      let orderedMovies = [];

      movies.map(function(allFeaturedMovies, i) {
        let obj = { miliseconds: Date.parse(movie.release_date), index: i };
        orderedMovies.push(obj);
      });

      orderedMovies.sort(function(a, b) {
        return a.miliseconds - b.miliseconds;
      });

      // change background image if Desktop or Mobile
      let latestMovie = movie.data.results[orderedMovies.length - 1];
      let backgroundImage =
        window.innerWidth < 600
          ? latestMovie.poster_path
          : latestMovie.backdrop_path;

      let featuredMovie = {
        title: latestMovie.title,
        description: latestMovie.overview,
        image: this.getBackgroundImage(backgroundImage)
      };

      return featuredMovie;
    },
    filterOnlyFourMovies(movies) {
      movies.splice(4);
      return movies;
    },
    getBackgroundImage(url) {
      return `linear-gradient(to top, rgba(0, 0, 0, 0.2), #000000), url("https://image.tmdb.org/t/p/w1280/${url}")`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap");

.homepage-container {
  background-color: black;
  height: 760px;
  padding-left: 7%;
  padding-right: 7%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2), #000000);
  background-size: cover;
}

.main-container {
  &-header {
    margin-top: 106px;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: white;
  }

  &-title {
    margin-top: 18px;
    font-family: "Roboto Slab", serif;
    width: 392px;
    font-family: RobotoSlab;
    font-size: 110px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.82;
    letter-spacing: normal;
    color: white;
  }

  &-button {
    margin-top: 19px;
    width: 160px;
    height: 40px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    padding-left: 12px;

    &-reproducir {
      margin-right: 30px;
    }

    span {
      width: 89px;
      height: 19px;
      padding-left: 8px;
      font-family: Montserrat;
      font-size: 16px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
    }
  }

  &-footer {
    width: 537px;
    height: 168px;
    font-family: Montserrat;
    font-size: 18px;

    &-title {
      margin-top: 25px;
      margin-bottom: 0;
      font-weight: bold;
    }
  }
}

.movies-wrapper {
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 100px;
}

li {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
}

ul {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}

.loading {
  margin-top: 20%;
}

// MOBILE
@media only screen and (max-width: 600px) {
  .homepage-container {
    padding-left: 0;
    padding-right: 0;
  }
}

</style>
