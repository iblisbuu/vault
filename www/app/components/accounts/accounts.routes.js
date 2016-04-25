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
		    	})
		    	.state('transactions', {
					url: '/transactions/:accountID',
					templateUrl: 'app/components/accounts/transactions/transactions.html',
					controller: 'TransactionsController',
					controllerAs: 'vm'
		    	});
		});
})();