<template>
    <nav class="navbar">
        <ul class="navbar-left">
          <img src="../assets/liteflix.svg" class="liteflix">
          <li class="inicio">Inicio</li>
          <li>Series</li>
          <li>Películas</li>
          <li>Agregados recientemente</li>
          <li>Mi lista</li>
          <li>
            <div class="oval">
              <img src="../assets/plus.svg" class="plus">
            </div>
          </li>
        </ul>
        <ul class="navbar-right">
          <li>Niños</li>
          <li>
            <img src="../assets/bell.svg" class="bell">
          </li>
          <li>
            <img src="../assets/user-01.svg" class="user-01">
          </li>
          <li>
            <img src="../assets/arrow.svg" class="arrow">
          </li>
        </ul>
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
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  ul {
    margin: 0;
    padding: 0;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    align-items: center;
  }

  li {
    padding: 3px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: white;
  }

  .inicio {
    font-weight: bold;
  }

  .navbar {
    background-color: rgb(59, 59, 59);
    margin: 0 auto;
    padding: 0;

    &-left li {
      padding-left: 20px;
    }

    &-right li {
      padding-right: 20px;
    }
  }

  .liteflix {
    width: 95px;
    height: 27px;
    object-fit: contain;
    margin-bottom: 12px;
  }

  .bell {
    width: 14px;
    height: 16px;
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

  .plus {
    width: 15.9px;
    height: 15px;
    object-fit: contain;
    position: relative;
    left: 11px;
    top: 10px;
  }

  .oval {
    width: 40px;
    height: 40px;
    background-color: #ff0000;
    border-radius: 83px;
  }
</style>
