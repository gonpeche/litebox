<script>
  export default {
    name: 'modal',
    template: '#modal',
    methods: {
      close(event) {
        this.$emit('close');
      },
    },
  };
</script>

<template>
<transition name="modal-fade">
    <div class="modal-backdrop" role="dialog">
      <div class="modal-container-" ref="modal">
        <div class="modal-popup">
          <div class="modal-popup-content">
            <div class="modal-popup-content-header">
              <img src="../assets/clip.svg" class="clip">
              <span class="add-file">Agregar archivo</span> o arrastrarlo y soltarlo aquí
            </div>
            <div>
              NIMBRE DE LA PELÍCULA
            </div>
            <div>
              CATEGORÍA
            </div>
          </div>
          <!-- <header class="modal-header">
            <slot name="header">
              <h2>
                This is the default tile!
              </h2>

              <button type="button" class="btn-close btn-right" @click="close" aria-label="Close modal">
                x
              </button>
            </slot>
          </header>

          <section class="modal-body">
            <slot name="body">
              I'm the default body!
            </slot>
          </section>

          <footer class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn btn-green" @click="close" aria-label="Close modal">
                Close me!
              </button>
            </slot>
          </footer> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

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
  left: 40px;
}

.modal-popup {
  font-family: 'Montserrat', sans-serif;
  background-color: white;
  width: 730px;
  height: 354px;
  border-radius: 10px;
  border: 1px solid red;

  &-content {
    margin-top: 30px;
    margin-left: 35px;
    margin-right: 35px;
    height: 297px;
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &-header {
      border: solid 1px #9b9b9b;
      border-style: dashed;
      border-radius: 10px;
      height: 100px;
      width: 100%;
      text-align: center;
      align-items: center;
      color: #9b9b9b;
      font-size: 16px;
      padding-right: 100px;
      letter-spacing: 0;

      .add-file {
        font-weight: 700;
        // font-size: 16px;
        color: #0076ff;
      }
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


</style>
