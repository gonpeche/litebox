<template>
  <div class="success-wrapper">
    <div class="content">
      <img src="../assets/liteflix.svg" alt="liteflix" />
      <div class="content-body">
        <p class="content-title">Felicitaciones!</p>
        <div><strong>{{name}}</strong> fue correctamente subido</div>
        <div>a la categoría de <strong>{{category}}</strong></div>
      </div>
      <div class="content-footer" @click="close">Cerrar</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "successUpload",
  props: ["name", "category", "close"],
};
</script>

<style lang="scss" scoped>

.success-wrapper {
  width: 730px;
  height: 355px;
  border-radius: 10px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.2);
  padding-top: 38px;
  padding-left: 35px;
  padding-bottom: 40px;
  color: white;
}

.content {
  max-width: 536px;

  &-title {
    margin: 0;
    padding: 0;
    font-size: 32px;
    padding-top: 44px;
    font-weight: 500;
  }

  &-body {
    font-size: 24px;
    line-height: 33px;
  }

  &-footer {
    width: 192px;
    height: 70px;
    border-radius: 35px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 51px;
    cursor: pointer;
  }
}

</style>
