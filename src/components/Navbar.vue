<template>
  <div>
    <div class="mobile" id="mobile">
      <img class="mobile-menu" src="../assets/menu.svg" alt @click="openSideMenu" />
      <img class="mobile-liteflix" src="../assets/liteflix.svg" alt />
      <div id="side-menu" class="side-nav">
        <div class="side-menu-icons">
          <img class="mobile-menu-close" src="../assets/menu.svg" alt @click="closeSideMenu" />
          <img class="mobile-liteflix-sidebar" src="../assets/liteflix.svg" alt />
        </div>
        <ul class="side-nav-items">
          <li class="user-profile">
            <img src="../assets/fill-1.svg">
            <span>Ernesto Garmendia</span>
          </li>
          <li class="item first">Cambiar Usuario</li>
          <li class="item">Configuración</li>
          <li class="item">Ayuda</li>
          <li>
            <div class="item item-bell">
              <img src="../assets/bell.svg" alt="">
              <img src="../assets/bell-dot.svg" class="bell-dot" alt="">
              <span class="item-novedades">Novedades</span>
            </div>
          </li>
          <li>Series</li>
          <li>Películas</li>
          <li>Mi lista</li>
          <li>Niños</li>
          <li>Agregar Película</li>
          <li>Log Out</li>
        </ul>
      </div>
    </div>
    <nav class="navbar">
      <ul class="navbar-left">
        <img src="../assets/liteflix.svg" class="liteflix" />
        <li class="inicio">Inicio</li>
        <li>Series</li>
        <li>Películas</li>
        <li>Agregados recientemente</li>
        <li>Mi lista</li>
        <div id="btn" class="oval show_add_movie" @click="showModal">
          <img src="../assets/plus.svg" class="plus" />
          <span class="add_movie">Agregar película</span>
        </div>
        <modal v-show="isModalVisible" @close="closeModal" />
      </ul>
      <ul class="navbar-right">
        <li>Niños</li>
        <li>
          <img src="../assets/bell.svg" class="bell" />
        </li>
        <li class="dropdown">
          <dropdown></dropdown>
        </li>
        <li>
          <img src="../assets/arrow.svg" class="arrow" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import dropdown from "../components/Dropdown";
import modal from "../components/Modal";

export default {
  name: "navbar",
  components: {
    dropdown,
    modal
  },
  data() {
    return {
      showAdd: false,
      isDropped: false,
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    openSideMenu() {
      document.getElementById("side-menu").style.width = "225px";
      document.getElementById("side-menu").style.color = "red";
    },
    closeSideMenu() {
      document.getElementById("side-menu").style.width = "0";
    }
  }
};
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
  font-family: "Montserrat", sans-serif;
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
  display: flex;
}

.oval:hover {
  width: 183px;
  cursor: pointer;
}

.show_add_movie {
  padding-top: 10px;
  padding-left: 20px;
}

.add_movie {
  font-family: "Montserrat", sans-serif;
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

// SIDEBAR
.mobile {
  display: none;
}


// MOBILE

@media only screen and (max-width: 600px) {
  .mobile {
    display: block;
    display: initial;
    font-size: 12px;
    &-menu {
      position: relative;
    top: -5px;
    }
  }
  .navbar {
    visibility: hidden;
  }

  .side-nav-items {
    display: flex;
    flex-direction: column;
    transition: margin-left 0.5s;
    margin-left: 16px;
    margin-right: 10px;
  }

  .mobile-menu-close {
    // margin-top: 8px;
    margin-left: 14px;
    position: relative;
    top: 9px;
    left: 1px;
  }

  .side-menu-icons {
    display: flex;
    flex-direction: row;
  }

  .mobile {
    visibility: visible;

    &-menu {
      margin-top: 17px;
      margin-left: 15px;
    }

    &-liteflix {
      margin-left: 91px;
      padding-top: 10px;

      &-sidebar {
        position: relative;
        left: 7px;
        top: 9px;
      }
    }
  }

  .side-nav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: black;
    overflow: hidden;
    transition: 0.3s;
    // border: 1px solid red;
  }

  .user-profile {
    width: 193px;
    height: 37px;
    border-radius: 18.5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-color: #222222;
    padding-top: 6px;
    padding-left: 11px;
    margin-top: 7px;
  }

  .item {
    padding-top: 10px;
    width: 193px;
    padding-bottom: 7px;
    border-bottom: 1px solid #222222;

  }

  .first {
    margin-top: 10px;
  }

  .bell-dot {
    position: relative;
        top: -3px;
    left: -9px;
  }

  .item-bell {
    // display: initial;
    display: flex;
    // padding-top: 26px;
    // padding-right: 88px;

    span {
     padding-left: -10px;
    }
  }

  .item-novedades {
    // position: relative;
    // right: 8px;
    // width: 240px;
    // display: block;
  }
}

// width: 100px;
//     position: absolute;
//     /* position: relative; */
//     top: 11px;
//     left: 32px;
</style>


