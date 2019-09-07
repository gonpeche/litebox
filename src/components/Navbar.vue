<template>
    <nav class="navbar">
        <ul class="navbar-left">
          <img src="../assets/liteflix.svg" class="liteflix">
          <li class="inicio">Inicio</li>
          <li>Series</li>
          <li>Películas</li>
          <li>Agregados recientemente</li>
          <li>Mi lista</li>
          <div id="btn" class="oval show_add_movie"  @click="showModal">
            <img src="../assets/plus.svg" class="plus">
            <span class="add_movie">Agregar película</span>
          </div>
          <modal v-show="isModalVisible" @close="closeModal" />
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
import modal from '../components/Modal'

export default {
  name: 'navbar',
  components: {
    dropdown,
    modal
  },
  data () {
    return {
      showAdd: false,
      isDropped: false,
      isModalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
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
    cursor: pointer
  }

  .show_add_movie {
    padding-top: 10px;
    padding-left: 20px;
  }

  .add_movie {
    font-family: 'Montserrat', sans-serif;
    position: relative;
    font-size: 16px;
    bottom: 4px;
    padding-left: 5px;
    color: white;
    font-weight: normal;
  }

  #btn span {
    margin-top: 1px;
    transition: max-width 0.1s;
    overflow: hidden;
  }
  #btn:hover span {
    max-width: 183px;
  }

</style>


