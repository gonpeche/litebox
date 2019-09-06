<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" role="dialog">
      <div class="modal-container-" ref="modal">
        <div class="modal-popup">
          <div class="modal-popup-content">

            <div class="modal-popup-content-top">
              <span class="close-modal" @click="close">x</span>

              <template v-if="startLoading">
                <progress-bar></progress-bar>
              </template>

              <template v-if="!startLoading">
                <div class="modal-popup-content-header">
                  <img src="../assets/clip.svg" class="clip">
                  <span class="add-file">Agregar archivo</span> o arrastrarlo y soltarlo aquí
                </div>
              </template>


              <div class="modal-popup-content-body">
                <div class="modal-popup-content-body-name">
                  <div>NOMBRE DE LA PELÍCULA</div>
                  <input type="text" v-model="name">
                </div>
                <div class="modal-popup-content-body-category">
                  <div>CATEGORIA</div>
                  <div>
                    <select v-model="category" class="input-form">
                      <option disabled value=""></option>
                      <option>Acción</option>
                      <option>Animación</option>
                      <option>Aventuras</option>
                      <option>Ciencia Ficción</option>
                      <option>Comedia</option>
                      <option>Documentales</option>
                      <option>Drama</option>
                      <option>Thriller</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-popup-content-bottom" @click="uploadMovie">
                Subir Película
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import progressBar from '../components/ProgressBar';

export default {
  name: 'modal',
  template: '#modal',
  components: {
    'progress-bar': progressBar
  },
  data () {
    return {
      name: '',
      category: ''
    }
  },
  computed: {
    startLoading: function () {
      return !!this.name && !!this.category
    }
  },
  methods: {
    close(event) {
      this.category = '';
      this.name = '';
      this.$emit('close');
    },
    uploadMovie() {
      this.progressBar = !this.progressBar
      console.log(this.nombre, this.categoria)
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');

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
  font-family: 'Montserrat', sans-serif;
  background-color: white;
  width: 730px;
  height: 354px;
  border-radius: 10px;
  border: 1px solid transparent;

  &-content {
    margin-top: 30px;
    margin-left: 35px;
    margin-right: 35px;
    height: 297px;
    // border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &-top {
      width: 100%;
    }

    &-header {
      // border: solid 1px #9b9b9b;
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

      .add-file {
        font-weight: 700;
        // font-size: 16px;
        color: #0076ff;
      }
    }

    &-body {
        // border: 1px solid pink;
        padding-top: 30px;
        // margin: 0;
        // padding: 0;
        color: #9b9b9b;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-weight: 500;
        font-size: 12px;
        letter-spacing: 5px;
        font-family: 'Montserrat', sans-serif;

        &-name {
          width: 50%;
          padding-right: 30px;
          // border: 1px solid yellow;
        }
        &-category {
          width: 50%;
          // border: 1px solid blue;
        }

        input {
          width: 100%;
          border: 0;
          outline: 0;
          height: 36px;
          border-bottom: solid 1.2px #0076ff;
          opacity: 0.8;
        }

        input[type="text"] {
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0;
          color: #000000;
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
  top: -29px;
  left: 23px;
  width: 7px;
  height: 7px;
  cursor: pointer;
}

</style>
