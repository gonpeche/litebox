<template>
  <div id="popup">
    <div ref="button" class="toggle-button" @click="showPopup = !showPopup"></div>
    <div
      v-show="showPopup"
      class="popup-box"
      v-closable="{
          exclude: ['button'],
          handler: 'onClose'
        }"
    >Test Popup Box</div>
  </div>
</template>


<script>
import handleOutsideClick from "../utils/CustomDirective";

export default {
  name: "inputPopup",
  data() {
    return {
      showPopup: false
    };
  },
  methods: {
    handleClick(e) {
      console.log(e.target.value);
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
}
.toggle-button {
  // background: #1188FF;
  // color: #FFF;
  // border: 0;
  // border-radius: 2px;
  // padding: 10px;
  // font-size: 14px;
  // cursor: pointer;
  // outline: none;
  // transition: 0.2s all;

  width: 100%;
  border: 0;
  outline: 0;
  height: 36px;
  border-bottom: solid 1.2px #0076ff;
  opacity: 0.8;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  color: #000000;
  background: white;
  border-radius: 0;
}

.popup-box {
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  background: #f0f8ff;
  border-radius: 1px;
  box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  color: #555585;
}
</style>
