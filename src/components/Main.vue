<template>
    <div class="main-container">
      <h2 class="main-container-header">ORIGINAL DE <strong>LITEFLIX</strong></h2>
      <h1 class="main-container-title">{{featuredMovie.title}}</h1>
      <ul>
        <li class="main-container-button main-container-button-reproducir">
          <img class="play" src="../assets/reproducir.svg">
          <span>Reproducir</span>
        </li>
        <li class="main-container-button">
          <img src="../assets/plus.svg">
          <span>Mi Lista</span>
        </li>
      </ul>
      <div class=main-container-footer>
        <h2 class="main-container-footer-title">Ver película</h2>
        <p class="main-container-footer-description">
          {{featuredMovie.description}}
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'mainContent',
  props: ['featuredMovie'],
  components: {},
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  // @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');
  // @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');

  .homepage-container {
    padding-left: 10%;
    padding-right: 10%;
    background-color: rgb(59, 59, 59);
    color: white;
  }

  .main-container {
    color: white;

    &-header {
      margin-top: 106px;
      font-family: 'Montserrat', sans-serif;
      font-size: 24px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
    }

    &-title {
      margin-top: 18px;
      font-family: 'Roboto Slab', serif;
      font-size: 110px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 0.82;
      letter-spacing: normal;
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
      font-family: Montserrat;
      font-size: 18px;

      &-title {
        margin-top: 25px;
        font-size: 20px;
        margin-bottom: 0;
        font-weight: 700;
      }

      &-description {
        font-weight: 400;
      }
    }

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
