self.addEventListener('push', function(e) {
    var options = {
      body: 'This notification was generated from a push!',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {
          action: 'explore',
          title: 'Explore this new world',
          icon: '/static/img/icons/checkmark.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/static/img/icons/xmark.png'
        },
      ]
    }
    e.waitUntil(
      self.registration.showNotification('Hello world!', options)
    )
})

self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
    var action = e.action;
  
    if (action === 'close') {
      notification.close();
    } else {
      clients.openWindow('http://google.co.in');
      notification.close();
    }
})

self.addEventListener('sync', function(event) {
  console.log('firing: sync');
  if (event.tag == 'myFirstSync') {
    event.waitUntil(fetchImage ());
  }
});

function fetchImage () {
  console.log('firing: fetchImage()')
  fetch('./backgroundSync').then(function (response) {
    return response
  })
  .then(function (text) {
    console.log('Request successful', text)
  })
  .catch(function (error) {
    console.log('Request failed', error)
  })
}