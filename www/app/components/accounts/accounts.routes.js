(function() {
    'use strict';

	angular
		.module('app.accounts')
		.config(function($stateProvider) {
		    $stateProvider
			    .state('accounts', {
					url: '/accounts',
					templateUrl: 'app/components/accounts/accounts.html',
					controller: 'AccountsController',
					controllerAs: 'vm'
		    	});
		});
})();