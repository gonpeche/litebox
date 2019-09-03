<template>
    <nav class="navbar">
      <div class="navbar-left">
        <img src="../assets/liteflix.svg" class="liteflix">
        <ul>
          <li>Inicio</li>
          <li>Series</li>
          <li>Películas</li>
          <li>Agregados recientemente</li>
          <li>Mi lista</li>
        </ul>
        <span class="oval">
          <img src="../assets/plus.svg" class="plus">
        </span>
      </div>
      <div class="navbar-right">
        <ul>
          <li>Niños</li>
          <img src="../assets/bell.svg" class="bell">
          <img src="../assets/user-01.svg" class="user-01">
          <img src="../assets/arrow.svg" class="arrow">
        </ul>
      </div>
    </nav>
</template>

<script>

export default {
  name: 'navbar',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    background-color: black;
  }
  .liteflix {
    width: 95px;
    height: 27px;
    object-fit: contain;
  }
  li {
    list-style-type: none;
  }

  .bell {
    width: 14px;
    height: 16px;
    object-fit: contain;
  }

  .plus {
    width: 15.9px;
    height: 15px;
    object-fit: contain;
  }

  .user-01 {
    width: 25px;
    height: 25px;
    object-fit: contain;
  }

  .arrow {
    width: 12px;
    height: 6px;
    object-fit: contain;
  }

  .oval {
    width: 40px;
    height: 40px;
    background-color: #ff0000;
  }
</style>
