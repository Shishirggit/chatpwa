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
  /* mounted () {
     if ('Notification' in window) {
      Notification.requestPermission(function (status) {
        console.log('Notification permission status:', status)
      })
    } else {
      console.log('This browser does not support notifications!')
    }
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(function (reg) {
        var options = {
          body: 'Second notification!',
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
          },
          actions: [
            {
              action: 'explore',
              title: 'Explore this new world',
              icon: '/static/img/icons/checkmark.png'
            },
            {
              action: 'close',
              title: 'Close notification',
              icon: '/static/img/icons/xmark.png'
            }
          ]
        }
        reg.showNotification('Hello world!', options)
      })
    }
  } */
  mounted () {
    navigator.serviceWorker.getRegistration().then((registration) => {
      return registration.pushManager.getSubscription().then(async (subscription) => {
        if (subscription) {
          return subscription
        }
        const response = await fetch('./vapidPublicKey')
        const vapidPublicKey = await response.text()
        const convertedVapidKey = this.urlBase64ToUint8Array(vapidPublicKey)

        return registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedVapidKey
        })
      })
    }).then((subscription) => {
      /* fetch('./register', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          subscription: subscription
        }),
      }) */

      fetch('./sendNotification', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          subscription: subscription
        })
      })
    })
  },
  methods: {
    urlBase64ToUint8Array (base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4)
      const base64 = (base64String + padding)
        .replace(/\-/g, '+') // eslint-disable-line
        .replace(/_/g, '/')

      const rawData = window.atob(base64)
      const outputArray = new Uint8Array(rawData.length)

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
      }
      return outputArray
    }
  }
}
</script>

<style>

</style>
