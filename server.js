var express = require('express'),
	app = express(),
	path = require('path');


var router = express.Router(); 				// get an instance of the express Router

//Setting up express - servers index
app.use(express.static(path.join(__dirname, 'www')));	 // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes/mainRoutes')(app, router);
require('./app/routes/templateRoutes')(router);

app.listen(3000, function () {
  console.log('Angular Seed running on port 3000');
});