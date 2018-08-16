const express = require('express');
const path = require('path');

const app = express();

console.log(path.join(__dirname,'/dist'));

app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
	res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server on port %d in %s mode", this.address().port, app.settings.env);
})
