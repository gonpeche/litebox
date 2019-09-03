<template>
  <div class="homepage-container">
    <navbar></navbar>
    <div class="main-container">
      <h2 class="main-container-header">ORIGINAL DE LITEFLIX</h2>
      <h1 class="main-container-title">Kids at school</h1>
      <ul>
        <li class="main-container-button main-container-button-reproducir">
          <img src="../assets/play.svg">
          <span>Reproducir</span>
        </li>
        <li class="main-container-button">
          <img src="../assets/plus.svg">
          <span>Mi Lista</span>
        </li>
      </ul>
      <h3>Ver temporada 1</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque cum porro modi maiores expedita rem nisi reiciendis ipsum. Distinctio deserunt iure voluptatum? Ad placeat nisi, nobis sed aut temporibus fugiat!</p>
    </div>
  </div>
</template>

<script>
import navbar from './Navbar'

export default {
  name: 'Homepage',
  components: {
    navbar
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');

  .homepage-container {
    padding-left: 10%;
    padding-right: 10%;
    background-color: rgb(59, 59, 59);
    color: white;
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
