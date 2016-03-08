(function() {
	'use strict';

	angular.module('app', [

        //Dependencies
		'ui.router',
		'ui.bootstrap',
        'ngResource',
        'datatables',

        // Components
        'app.template',
        'app.login',
        'app.accounts'
    ]);
})();