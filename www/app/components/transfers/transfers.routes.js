(function() {
    'use strict';

	angular
		.module('app.transfers')
		.config(function($stateProvider) {
		    $stateProvider
			    .state('transfers', {
					url: '/transfers',
					templateUrl: 'app/components/transfers/transfers.html',
					controller: 'TransfersController',
					controllerAs: 'vm'
		    	});
		});
})();