<template>
  <div id="popup">
    <div
      ref="button"
      class="toggle-button"
      @click="showPopup = !showPopup"
      v-bind:class="{'active-input': readyToUpload }"
    >{{category}}</div>
    <div
      v-show="showPopup"
      class="popup-box"
      v-closable="{
          exclude: ['button'],
          handler: 'onClose'
        }"
    >
      <div class="movies-wrapper" @click="handleClick">
        <div value="Acción">Acción</div>
        <div value="Animación">Animación</div>
        <div value="Aventuras">Aventuras</div>
        <div value="Ciencia Ficción">Ciencia Ficción</div>
        <div value="Comedia">Comedia</div>
        <div value="Documentales">Documentales</div>
        <div value="Drama">Drama</div>
        <div value="Thriller">Thriller</div>
      </div>
    </div>
  </div>
</template>


<script>
import handleOutsideClick from "../utils/CustomDirective";

export default {
  name: "inputPopup",
  props: ["setCategory", "category", "readyToUpload"],
  data() {
    return {
      showPopup: false
    };
  },
  methods: {
    handleClick(event) {
      this.setCategory(event.target.getAttribute("value"));
      this.showPopup = false;
    },
    onClose() {
      this.showPopup = false;
    }
  },
  directives: {
    handleOutsideClick
  }
};
</script>




<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap");

.movies-wrapper {
  color: #9b9b9b;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 0;
  margin: 0;
  padding-top: 3%;
  padding-left: 5%;
  padding-right: 9%;
  padding-bottom: 3%;
  height: 260px;
  overflow-y: scroll;

  div {
    border-bottom: 1px solid rgb(204, 203, 203);
    padding-bottom: 2%;
    padding-top: 2%;
  }

  div:nth-last-child(1) {
    border-bottom: 0;
  }
}

.popup-wrapper {
  border: 1px solid red;
  position: absolute;
  background-color: green;
  z-index: 1;
  max-height: 260px;
  width: 315px;
  min-height: 260px;
}

#popup {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
}
.toggle-button {
  width: 100%;
  font-family: "Montserrat", sans-serif;
  border: 0;
  outline: 0;
  height: 36px;
  border-bottom: solid 1.2px #0076ff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0;
  color: #000000;
  background: white;
  border-radius: 0;
  padding-top: 5px;
}

.popup-box {
  position: absolute;
  left: 50%;
  top: 4px;
  transform: translateX(-50%);
  background: white;
  box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.2);

  color: #9b9b9b;

  width: 334px;
  height: 260px;
  border-radius: 10px;
}

.active-input {
  border-bottom: solid 1.2px black;
}
</style>
