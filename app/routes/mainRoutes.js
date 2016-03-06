module.exports = function(app, router) {


	// ROUTES FOR OUR API
	// =============================================================================
	
	// middleware to use for all requests
	router.use(function(req, res, next) {
		// do logging
		next(); // make sure we go to the next routes and don't stop here
	});

	// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
	router.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to our api!' });	
	});

	// REGISTER OUR ROUTES -------------------------------
	// all of our routes will be prefixed with /api
	app.use('/', router);

};