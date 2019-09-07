<template>
  <div class='homepage-container' v-bind:style="{ 'background-image': featuredMovie.image }">
    <navbar></navbar>
    <main-content :featuredMovie="featuredMovie"></main-content>
    <proximamente :movies="upcomingMovies" type='upcoming'></proximamente>
    <popular-movies :movies="popularMovies" type='popular'></popular-movies>
    <added-manually></added-manually>
  </div>
</template>

<script>
import navbar from '../components/Navbar';
import mainContent from '../components/Main';
import proximamente from '../components/Proximamente';
import popularMovies from '../components/PopularMovies';
import addedManually from '../components/AddedManually';
import axios from 'axios';

export default {
  name: 'Homepage',
  components: {
    navbar,
    'main-content': mainContent,
    'popular-movies': popularMovies,
    'added-manually': addedManually,
    proximamente
  },
  data () {
    return {
      upcomingMovies: [],
      popularMovies: [],
      featuredMovie: [],
      loading: false
    }
  },
  mounted () {
    this.loading = true;

    Promise.all([this.getUpcomingMovies(), this.getPopularMovies(), this.getFeaturedMovie()])
    .then((response) => {
      let upcomingMovies = this.filterMovies(response[0]);
      let popularMovies = this.filterMovies(response[1]);

      this.upcomingMovies = upcomingMovies;
      this.popularMovies = popularMovies;
      this.featuredMovie = response[2];

      this.loading = false;
    })
    .catch(error => console.log(error))

  },
  methods: {
    async getUpcomingMovies() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=6f26fd536dd6192ec8a57e94141f8b20')
        return response.data.results
      } catch (error) {
        console.error(error)
      }
    },
    async getPopularMovies() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20')
        return response.data.results
      } catch (error) {
        console.error(error)
      }
    },
    async getFeaturedMovie() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20')

        const featuredMovie = {
          title: response.data.results[5].title,
          description: response.data.results[5].overview,
          image: this.getBackgroundImage(response.data.results[5].backdrop_path)
        }
        return featuredMovie
      } catch (error) {
        console.error(error)
      }
    },
    filterMovies(movies) {
      movies.splice(4)
      return movies
    },
    getBackgroundImage(url) {
      return `linear-gradient(to top, rgba(0, 0, 0, 0.2), #000000), url("https://image.tmdb.org/t/p/original/${url}")`
    },
    getSize(type) {
      switch(type) {
        case 'upcoming':
          return {
            height: 155,
            width: 253,
          }
          break;
        case 'popular':
          return {
            height: 507,
            width: 253
          }
          break;
        default:
          return null
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');

  // .landing-wrapper {
  //   background-color: black;
  // }

  .homepage-container {
    background-color: black;
    height: 760px;
    padding-left: 11%;
    padding-right: 11%;
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
      font-family: 'Roboto Slab', serif;
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
      background-color: rgba(0,0,0,0.5);
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
</style>
