<template>
  <div @mouseover="showMenu = true" @mouseleave="showMenu = false">
      <img src="../assets/user-01.svg" class="user-01">
      <div class="dropdown-content" v-show="showMenu">
        <ul>
          <li>
            <img src="../assets/fill-1.svg" class="Fill-1">
            <span>Ernesto G...</span>
          </li>
          <li>
            <img src="../assets/user-01.svg" alt="">
            <span>User 03</span>
          </li>
          <li>
            <img src="../assets/user-01.svg" alt="">
            <span>User 04</span>
          </li>
        </ul>
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
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  .dropdown {
    // padding-right: 10px;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
    width: 130px;
    height: 218px;
    border-radius: 5px;
    background-color: white;
    left: -77px;
    top: 40px;
  }

  .dropdown-content:before {
    border-bottom: 20px solid #ffffff;
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
    border-bottom: 20px solid #ffffff;
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
  // .dropdown:hover .dropdown-content {
  //   display: block;
  // }

  .Fill-1 {
    width: 13.3px;
    height: 15px;
    object-fit: contain;
  }

</style>
