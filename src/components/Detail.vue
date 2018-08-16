<template>
<mdc-layout-grid>
<mdc-layout-cell>
<mdc-card>
  <mdc-card-primary-action>
    <mdc-card-media :src="cat.url">
    </mdc-card-media>
  </mdc-card-primary-action>
  <mdc-card-header
    title="Title goes here"
    :subtitle="cat.info" >
    {{cat.comment }}
  </mdc-card-header>
  <mdc-card-actions>
     <mdc-button to="/post" raised>Post</mdc-button>
    <mdc-card-action-icons>
      <mdc-card-action-icon icon="star" />
    </mdc-card-action-icons>
  </mdc-card-actions>
</mdc-card> 
</mdc-layout-cell>
</mdc-layout-grid>
</template>
<script>
import { find } from 'lodash'
export default {
  name: 'Detail',
  data () {
    return {
      cat: null
    }
  },
  created () {
    this.cat = find(this.$root.cat, (cat) => cat['.key'] === this.$route.params.id)
  }
}
</script>
<style scoped>

</style>