<template>
  <div class="progress-container">
    <template v-if="loading">
      <div class="progress-title"> Cargando {{width}}%</div>
      <div class="progress-bar" style="--width: 10" data-label=""></div>
      <div class="progress-footer">CANCELAR</div>
    </template>

    <template v-if="readyUpload">
      <div class="progress-title"><strong>100% Cargado</strong></div>
      <div class="progress-bar" style="--width: 10" data-label=""></div>
      <div class="progress-footer" @click="init">CANCELAR</div>
    </template>

    <template v-if="error">
      <div class="progress-title"> <strong>Error!</strong> No se pudo cargar la película</div>
      <div id="error" style="--width: 10" data-label=""></div>
      <div class="progress-footer" @click="init">REINTENTAR</div>
    </template>


  </div>
</template>

<script>
export default {
  name: "progressBar",
  props: ['validateUpload', 'init'],
  data() {
    return {
      width: 0,
      loading: true,
      error: false,
      readyUpload: false
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
          progressBar.style.setProperty("--width", width + 0.9);
        } else {

          self.handleUploadStatus()

          clearInterval(intervalId);
        }
      };

      let start = function() {
        intervalId = setInterval(setWidth, 1);
      };

      start();
    },
    handleUploadStatus() {
      const random = Math.floor(Math.random() * Math.floor(2));

      if (random === 0) {
        this.error = true;
        this.loading = false;
        this.readyUpload = false;
      } else {
        this.loading = false;
        this.readyUpload = true;
        this.validateUpload()
      }
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

    .error {
    background-color: transparent;
    position: relative;
    border-radius: 1.5em;
    color: white;
    padding-top: 10px;
    }
  }

  &-footer {
    text-align: center;
    padding-top: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #4a4a4a;
    cursor: pointer;
  }
}

.progress-bar::before {
  content: attr(data-label);
  align-items: center;
  max-width: 265px;
  height: 20px;
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

#error {
  border: 1px solid red;
    content: attr(data-label);
  align-items: center;
  max-width: 265px;
  height: 20px;
  left: 0.5em;
  top: 0.5em;
  bottom: 0.5em;
  width: calc(var(--width, 0) * 1%);
  min-width: 2rem;
  max-width: 100%;
  background-color: red;
  margin-top: 10px;
  border-radius: 1em;
  padding-top: 20px;
}
</style>
