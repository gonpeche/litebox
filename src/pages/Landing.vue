<template>
  <div class="homepage-container">
    <navbar></navbar>
    <div class="main-container">
      <h2>ORIGINAL DE LITEFLIX</h2>
      <h1>KIDS AT SCHOOL</h1>
      <ul>
        <li>Reproducir</li>
        <li>Mi Lista</li>
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
  .homepage-container {
    padding-left: 10%;
    padding-right: 10%;
  }

  .main-container {
    border: 1px solid red;
    color: red;
  }
</style>
