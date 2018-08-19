const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname + '/dist'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const webPush = require('web-push');

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log("You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY "+
    "environment variables. You can use the following ones:");
  console.log(webPush.generateVAPIDKeys());
  return;
}

webPush.setVapidDetails(
  'https://chatpwa.herokuapp.com',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

app.get('/vapidPublicKey', function(req, res) {
  res.send(process.env.VAPID_PUBLIC_KEY);
});

app.post('/sendNotification', function(req, res) {
  const subscription = req.body.subscription;
  setTimeout(function() {
    webPush.sendNotification(subscription, null, null)
    .then(function() {
      res.sendStatus(201);
    })
    .catch(function(error) {
      res.sendStatus(500);
      console.log(error);
    });
  }, 10 * 1000);
});

app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server on port %d in %s mode", this.address().port, app.settings.env);
})
