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
          icon: 'static/img/checkmark.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: 'static/img/xmark.png'
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
      clients.openWindow('http://localhost:5000');
      notification.close();
    }
})