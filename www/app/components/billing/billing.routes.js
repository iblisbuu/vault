(function() {
    'use strict';

	angular
		.module('app.billing')
		.config(function($stateProvider) {
		    $stateProvider
			    .state('billing', {
					url: '/billing',
					templateUrl: 'app/components/billing/billing.html',
					controller: 'BillingController',
					controllerAs: 'vm'
		    	});
		});
})();