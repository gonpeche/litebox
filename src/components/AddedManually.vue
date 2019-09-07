<template>
  <div class="Added-container" v-bind="getCatalog">
    <div v-if="catalog.length > 0">
      <div v-if="accion">
        <show-added-movies category="Acción" :catalog="catalog"></show-added-movies>
      </div>
      <div v-if="animacion">
        <show-added-movies category="Animación" :catalog="catalog"></show-added-movies>
      </div>
      <div v-if="aventuras">
        <show-added-movies category="Aventuras" :catalog="catalog"></show-added-movies>
      </div>
      <div v-if="cienciaFiccion">
        <show-added-movies category="Ciencia Ficción" :catalog="catalog"></show-added-movies>
      </div>
      <div v-if="comedia">
        <show-added-movies category="Comedia" :catalog="catalog"></show-added-movies>
      </div>
      <div v-if="documentales">
        <show-added-movies category="Documentales" :catalog="catalog"></show-added-movies>
      </div>
      <div v-if="drama">
        <show-added-movies category="Drama" :catalog="catalog"></show-added-movies>
      </div>
      <div v-if="thriller">
        <show-added-movies category="Thriller" :catalog="catalog"></show-added-movies>
      </div>
    </div>
  </div>
</template>

<script>
import showAddedMovies from '../components/ShowAddedMovies'

export default {
  name: "added-manually",
  components: {
    'show-added-movies': showAddedMovies
  },
  data() {
    return {
      accion: false,
      animacion: false,
      aventuras: false,
      cienciaFiccion: false,
      comedia: false,
      documentales: false,
      drama: false,
      thriller: false,
      catalog: []
    };
  },
  computed: {
    getCatalog() {
      let catalog = this.$store.state.catalog;
      let newCatalog = []

      for (var i = 0; i < catalog.length; i++) {
        if (catalog[i].category === 'Acción') {
          newCatalog.push(catalog[i])
          this.accion = true
        } else if (catalog[i].category === 'Animación') {
          newCatalog.push(catalog[i])
          this.animacion = true
        } else if (catalog[i].category === 'Aventuras') {
          newCatalog.push(catalog[i])
          this.aventuras = true
        } else if (catalog[i].category === 'Ciencia Ficción') {
          newCatalog.push(catalog[i])
          this.cienciaFiccion = true
        } else if (catalog[i].category === 'Comedia') {
          newCatalog.push(catalog[i])
          this.comedia = true
        } else if (catalog[i].category === 'Documentales') {
          newCatalog.push(catalog[i])
          this.documentales = true
        } else if (catalog[i].category === 'Drama') {
          newCatalog.push(catalog[i])
          this.drama = true
        } else if (catalog[i].category === 'Thriller') {
          newCatalog.push(catalog[i])
          this.thriller = true
        }
      }

    this.catalog = newCatalog
  }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.Added-container {
  color: white;
}
</style>
