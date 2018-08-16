<template>
<mdc-layout-app>
  <mdc-toolbar slot="toolbar">
    <mdc-toolbar-row>
      <mdc-toolbar-section align-start >
        <mdc-toolbar-menu-icon event="toggle-drawer">
        </mdc-toolbar-menu-icon>
        <mdc-toolbar-title>Title</mdc-toolbar-title>
      </mdc-toolbar-section>
      <mdc-toolbar-section align-end>
        <mdc-toolbar-icon event="show-help" icon="help">
        </mdc-toolbar-icon>
      </mdc-toolbar-section>
    </mdc-toolbar-row>
  </mdc-toolbar>
  
  <mdc-drawer slot="drawer" toggle-on="toggle-drawer" temporary>
  <mdc-toolbar-title>Title</mdc-toolbar-title>
    <mdc-drawer-list>
      <mdc-drawer-item start-icon="inbox" to="/">Home</mdc-drawer-item>
      <mdc-drawer-item start-icon="send" to="Post">Post</mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer>
  <main>
    <router-view></router-view>   
  </main>
</mdc-layout-app>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style>

</style>
