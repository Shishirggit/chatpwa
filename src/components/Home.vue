<template><div>
<mdc-layout-grid v-for="picture in getCats()" v-bind:key="picture.id">
<mdc-layout-cell>
<mdc-card>
  <mdc-card-primary-action>
    <mdc-card-media :src="picture.url">
    </mdc-card-media>
  </mdc-card-primary-action>
  <mdc-card-header
    title="Title goes here"
    :subtitle="picture.comment" >
  </mdc-card-header>
  <mdc-card-actions>
     <mdc-button @click="displayDetails(picture['.key'])" raised>Detail</mdc-button>
    <mdc-card-action-icons>
      <mdc-card-action-icon icon="star" />
    </mdc-card-action-icons>
  </mdc-card-actions>
</mdc-card> 
</mdc-layout-cell>
</mdc-layout-grid></div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      pictures: this.$root.cat
    }
  },
  methods: {
    displayDetails (id) {
      this.$router.push({name: 'Detail', params: { id: id }})
    },
    getCats () {
      if (navigator.onLine) {
        this.saveCatsToCache()
        return this.$root.cat
      } else {
        return JSON.parse(localStorage.getItem('cats'))
      }
    },
    saveCatsToCache () {
      this.$root.$firebaseRefs.cat.once('value', (snapchot) => {
        let cachedCats = []
        snapchot.forEach((catSnapchot) => {
          let cachedCat = catSnapchot.val()
          cachedCat['.key'] = catSnapchot.key
          cachedCats.push(cachedCat)
        })
        localStorage.setItem('cats', JSON.stringify(cachedCats))
      })
    }
  },
  mounted () {
    this.saveCatsToCache()
  }
}
</script>
<style scoped>

</style>