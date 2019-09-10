<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" role="dialog">
      <div class="modal-container" ref="modal">
        <div class="modal-popup" v-bind:class="{ success: movieUploaded }">
          <span class="close-modal" @click="close">x</span>

          <template v-if="!movieUploaded">
            <div class="modal-popup-content">
              <div class="modal-popup-content-top">
                <template v-if="startLoading">
                  <progress-bar :validateUpload="validateUpload" :init="init"></progress-bar>
                </template>

                <template v-if="!startLoading">
                  <div class="modal-popup-content-header">
                    <div class="modal-popup-content-header-text">
                      <img src="../assets/clip.svg" class="clip" alt="clip" />
                      <span class="add-file">Agregar archivo</span> o arrastrarlo y soltarlo aquí
                    </div>
                  </div>
                </template>

                <div class="modal-popup-content-body">
                  <div class="modal-popup-content-body-name">
                    <div>NOMBRE DE LA PELÍCULA</div>
                    <input
                      type="text"
                      v-model="name"
                      class="input"
                      v-bind:class="{ 'active-input': readyToUpload }"
                    />
                  </div>
                  <div class="modal-popup-content-body-category">
                    <div>CATEGORIA</div>
                    <div>
                      <input-popup
                        :category="category"
                        :setCategory="setCategory"
                        :readyToUpload="readyToUpload"
                      ></input-popup>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="modal-popup-content-bottom"
                v-bind:class="{ active: readyToUpload }"
                @click="uploadMovie"
              >Subir Película</div>
            </div>
            <span class="disclaimer">* Disclaimer off-topic: Hay 50% de chances de que salga Error</span>
          </template>

          <template v-else>
            <success-upload :name="name" :category="category" :close="close"></success-upload>
          </template>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import progressBar from "../components/ProgressBar";
import successUpload from "../components/SuccessUpload";
import inputPopup from "../components/InputPopup";

export default {
  name: "modal",
  template: "#modal",
  components: {
    "progress-bar": progressBar,
    "success-upload": successUpload,
    "input-popup": inputPopup
  },
  data() {
    return {
      name: "",
      category: "",
      readyToUpload: false,
      movieUploaded: false
    };
  },
  computed: {
    startLoading: function() {
      return !!this.name && !!this.category;
    }
  },
  methods: {
    init() {
      this.category = "";
      this.name = "";
      this.readyToUpload = false;
      this.movieUploaded = false;
    },
    close() {
      this.init();
      this.$emit("close");
    },
    validateUpload() {
      this.readyToUpload = true;
    },
    uploadMovie() {
      if (this.readyToUpload) {
        let selectedMovie = {
          name: this.name,
          category: this.category
        };

        this.$store.commit("addToCatalog", selectedMovie);
        this.movieUploaded = true;
      }
    },
    setCategory(name) {
      this.category = name;
    }
  }
};
</script>

<style lang="scss">
.btn {
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  padding: 20%;
}

.clip {
  position: relative;
  left: 43px;
}

.modal-popup {
  font-family: "Montserrat", sans-serif;
  background-color: white;
  width: 730px;
  height: 354px;
  border-radius: 10px;

  &-content {
    margin-top: 30px;
    margin-left: 35px;
    margin-right: 35px;
    height: 297px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &-top {
      width: 100%;
    }

    &-header {
      border-style: dotted;
      border-radius: 10px;
      height: 100px;
      width: 100%;
      text-align: center;
      align-items: center;
      color: #9b9b9b;
      font-size: 16px;
      padding-right: 65px;
      letter-spacing: 0;

      &-text {
        padding: 0;
        margin: 0;
        position: relative;
        top: -6px;
      }

      .add-file {
        font-weight: 700;
        color: #0076ff;
      }
    }

    &-body {
      padding-top: 30px;
      color: #9b9b9b;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-weight: 500;
      font-size: 12px;
      letter-spacing: 5px;
      font-family: "Montserrat", sans-serif;

      &-name {
        width: 50%;
        padding-right: 30px;
      }
      &-category {
        width: 50%;
      }
    }

    &-bottom {
      width: 350px;
      height: 70px;
      border-radius: 35px;
      background-color: #dedede;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      color: white;
      cursor: pointer;
    }
  }
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.input-form {
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

.close-modal {
  position: relative;
  float: right;
  right: 8px;
  cursor: pointer;
}

.active {
  background-color: black;
}

.input {
  border-bottom: solid 1.2px #0076ff;
  height: 35px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
}

.active-input {
  border-bottom: solid 1.2px black;
}

*:focus {
  outline: none;
}

#input-form-focus {
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
}

.success {
  background-color: #7ed321;
}

.disclaimer {
  color: #c0c0c0;
  font-size: 9px;
  padding-left: 9px;
  font-style: italic;
}
// Popup Styles
.popup-wrapper button {
  position: relative;
}

.button-popup {
  position: relative;
}
</style>
