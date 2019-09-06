<template>
  <div class="progress-container">
    <div class="progress-bar" style="--width: 10" data-label="Loading..."></div>
    <!-- Side Links Only -->
    <div class="side-links">
      <span class="side-link-text">Cancelar</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "progressBar",
  data() {
    return {};
  },
  mounted() {
    this.startProgressBar();
  },
  methods: {
    startProgressBar() {
      const progressBar = document.getElementsByClassName("progress-bar")[0];

      var intervalId = null;
      var varCounter = 0;

      var varName = function() {
        if (varCounter <= 1000) {
          varCounter++;

          const computedStyle = getComputedStyle(progressBar);
          let width =
            parseFloat(computedStyle.getPropertyValue("--width")) || 0;
          progressBar.style.setProperty("--width", width + 0.1);
          console.log("weeee");
        } else {
          clearInterval(intervalId);
        }
      };

      let start = function() {
        intervalId = setInterval(varName, 1);
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
  border-radius: 10px;
  background-color: #f3f3f3;
}

.progress-bar {
  position: relative;
  width: 500px;
  height: 3em;
  background-color: #111;
  border-radius: 1.5em;
  color: white;
}

.progress-bar::before {
  content: attr(data-label);
  display: flex;
  align-items: center;
  position: absolute;
  left: 0.5em;
  top: 0.5em;
  bottom: 0.5em;
  width: calc(var(--width, 0) * 1%);
  min-width: 2rem;
  max-width: calc(100% - 1em);
  background-color: #7ed321;
  border-radius: 1em;
  padding: 1em;
}
</style>
