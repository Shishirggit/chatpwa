<template>
<form>
<mdc-layout-grid>
<mdc-layout-cell>
<mdc-card>
  <mdc-card-primary-action>
    <mdc-card-media :src="this.catUrl">
    </mdc-card-media>
  </mdc-card-primary-action>
  <mdc-card-header
    title="Title goes here"
    subtitle="Describe me" >
  </mdc-card-header>
  <mdc-textfield id="username" v-model="title" label="Describe" outline/>
  <mdc-card-actions>
     <mdc-button @click.prevent="postCat" raised>POST A CAT</mdc-button>
    <mdc-card-action-icons>
      <mdc-card-action-icon icon="star" />
    </mdc-card-action-icons>
  </mdc-card-actions>
</mdc-card> 
</mdc-layout-cell>
</mdc-layout-grid>
</form>
</template>
<script>
import parse from 'xml-parser'
export default {
  name: 'Post',
  data () {
    return {
      'catUrl': null,
      title: ''
    }
  },
  mounted () {
    this.$http.get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1').then(response => {
      this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
    })
  },
  methods: {
    postCat () {
      this.$root.$firebaseRefs.cat.push({
        'url': this.catUrl,
        'comment': this.title,
        'info': 'Posted by on Tuesday',
        'created_at': -1 * new Date().getTime()
      })
        .then(this.$router.push('/'))
    }
  }
}
</script>
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>