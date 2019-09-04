<template>
  <div @mouseover="showMenu = true" @mouseleave="showMenu = false" class="dropdown-wrapper">
    <!-- <div> -->
      <img src="../assets/user-01.svg">
      <div id="dropdown-fix">
        <div class="dropdown-content" v-show="showMenu" >
          <ul>
            <li>
              <div class="user">
                <img src="../assets/fill-1.svg">
                <span>Ernesto G...</span>
              </div>
            </li>
            <li class="user-gray">
              <img src="../assets/user-gray.svg" alt="">
              <span>User 03</span>
            </li>
            <li class="user-gray last">
              <img src="../assets/user-gray.svg" alt="">
              <span>User 04</span>
            </li>
            <div class="button-dropdown">
              <li class="buttons">Configuración</li>
              <hr class="button-separator">
              <li class="buttons">Ayuda</li>
              <hr class="button-separator">
              <li class="buttons"><strong>Log Out</strong></li>
            </div>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'dropdown',
  data () {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdown-content {
    font-family: 'Montserrat', sans-serif;
    display: none;
    position: absolute;
    z-index: 1;
    width: 130px;
    height: 218px;
    border-radius: 5px;
    background-color: white;
    color: black;
    left: -77px;
    top: 40px;
    font-size: 12px;
  }

  #dropdown-fix::before {
    content: '';
    position: absolute;
    padding: 0;
    margin: 0;
    top: 19px;
    left: 0px;
    width: 34px;
    // border: 1px solid red;
    height: 32px;
  }

  .dropdown-content:before {
    // z-index: -1;
    border-bottom: 20px solid white;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    content: "";
    height: 0;
    left: 79px;
    position: absolute;
    top: 2px;
    width: 0;
    border-radius: 30px;
    transform: rotate(-135deg);
  }

  .dropdown-content:after {
    // z-index: -1;
    border-bottom: 20px solid white;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    content: "";
    height: 0;
    left: 68px;
    position: absolute;
    top: 2px;
    width: 0;
    border-radius: 30px;
    transform: rotate(135deg);
  }

  .dropdown-content {
    display: block;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    padding-top: 11px;
    padding-right: 9px;
  }

  .user {
    width: 111px;
    height: 37px;
    border-radius: 18.5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--white);
    padding-top: 5px;
    padding-left: 5px;

    &-gray {
      padding-top: 6px;
      padding-left: 5px;
      color: #9b9b9b;
    }
  }

  span {
    padding-left: 3px;
  }

  .last {
    padding-top: 10px;
  }

  .buttons {
    padding-top: 8px;
    padding-bottom: 5px;
  }

  .button-dropdown {
    padding-top: 16px;
  }

  .button-separator {
    margin: 0;
    padding: 0;
  }
</style>
