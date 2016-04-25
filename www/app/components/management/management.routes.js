(function() {
    'use strict';

	angular
		.module('app.management')
		.config(function($stateProvider) {
		    $stateProvider
			    .state('management', {
					url: '/management',
					templateUrl: 'app/components/management/management.html',
					controller: 'ManagementController',
					controllerAs: 'vm'
		    	});
		});
})();