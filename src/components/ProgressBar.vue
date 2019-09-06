<template>
  <div class="progress-container">
    <div class="progress-title"> Cargando {{width}}%</div>
    <div class="progress-bar" style="--width: 10" data-label=""></div>
    <div class="progress-footer">CANCELAR</div>
  </div>
</template>

<script>
export default {
  name: "progressBar",
  props: [],
  data() {
    return {
      width: 0
    };
  },
  mounted() {
    this.startProgressBar();
  },
  computed: {
  },
  methods: {
    startProgressBar() {
      const progressBar = document.getElementsByClassName("progress-bar")[0];
      var intervalId = null;
      let self = this

      var setWidth = function() {
        const computedStyle = getComputedStyle(progressBar);
        let width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;

        if (width <= 100) {
          self.width = Math.round(width);
          progressBar.style.setProperty("--width", width + 0.2);
        } else {
          clearInterval(intervalId);
        }
      };

      let start = function() {
        intervalId = setInterval(setWidth, 5);
      };

      start();
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap");

.progress-container {
  width: 660px;
  height: 100px;
  padding-top: 15px;
  padding-left: 29px;
  padding-right: 31px;
  padding-bottom: 15px;
  border-radius: 10px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.progress {
  &-title {
    // width: 89px;
    height: 15px;
    // font-family: Montserrat;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
  &-bar {
    background-color: transparent;
    position: relative;
    border-radius: 1.5em;
    color: white;
    padding-top: 10px;
  }

  &-footer {
    text-align: center;
    padding-top: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #4a4a4a;
  }
}

.progress-bar::before {
  content: attr(data-label);
  // display: flex;
  align-items: center;
  max-width: 265px;
    // width: 265px;
  height: 20px;
  // position: absolute;
  left: 0.5em;
  top: 0.5em;
  bottom: 0.5em;
  width: calc(var(--width, 0) * 1%);
  min-width: 2rem;
  max-width: 100%;
  background-color: #7ed321;
  border-radius: 1em;
  padding-top: 20px;
}
</style>
