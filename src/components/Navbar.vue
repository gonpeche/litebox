<template>
    <nav class="navbar">
        <ul class="navbar-left">
          <img src="../assets/liteflix.svg" class="liteflix">
          <li class="inicio">Inicio</li>
          <li>Series</li>
          <li>Películas</li>
          <li>Agregados recientemente</li>
          <li>Mi lista</li>
          <li @mouseover="showAdd = true" @mouseleave="showAdd = false" class="oval show_add_movie">
              <img src="../assets/plus.svg" class="plus">
                <div v-show="showAdd" class="add_movie">
                  Agregar película
                </div>
          </li>
        </ul>
        <ul class="navbar-right">
          <li>Niños</li>
          <li>
            <img src="../assets/bell.svg" class="bell">
          </li>
          <li class="dropdown">
            <dropdown></dropdown>
          </li>
          <li>
            <img src="../assets/arrow.svg" class="arrow">
          </li>
        </ul>
    </nav>
</template>

<script>
import dropdown from '../components/Dropdown';
import { setTimeout } from 'timers';

export default {
  name: 'navbar',
  components: {
    dropdown
  },
  data () {
    return {
      showAdd: false
    }
  },
  methods: {
    // showMenuON() {
    //   setTimeout(() => {
    //     console.log('que')
    //     this.showMenu = true
    //   }, 100)
    // },
    // showMenuOF() {
    //   this.showMenu = false
    // }
  }
}
</script>

<style lang="scss" scoped>
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
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: white;
  }

  .inicio {
    font-weight: 700;
  }

  .navbar {
    margin: 0 auto;
    padding: 0;

    &-left li {
      padding-left: 20px;
    }

    &-right {
      li {
        padding-right: 20px;
      }

      .dropdown {
        padding-right: 10px;
      }
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
    left: -8px;
    top: 2px;
  }

  .oval {
    margin-left: 10px;
    width: 40px;
    height: 40px;
    background-color: #ff0000;
    border-radius: 83px;
    transition: width 0.2s;
    display:flex;
  }

  .oval:hover {
    width: 183px;
  }

  .show_add_movie {
    padding-top: 10px;
    padding-left: 20px;
  }

  .add_movie {
    // display: block;
        transition: width 0.1s;
  }

  .add_movie:hover {
    width: 183px;
    // display: block;
  }

</style>


