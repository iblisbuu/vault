(function() {
    'use strict';

	angular
		.module('app.login')
		.config(function($stateProvider) {
		    $stateProvider
			    .state('login', {
					url: '/login',
					templateUrl: 'app/components/login/login.html',
					controller: 'LoginController',
					controllerAs: 'vm'
		    	});
		});
})();