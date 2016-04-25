(function() {
    'use strict';

    angular
    	.module('accounts.transactions')
    	.controller('TransactionsController', TransactionsController);

    function TransactionsController($resource, Accounts) {
        var vm = this;

        vm.account = {
            name: 'Checking',
            transactions: []
        };

        $resource('app/data/transactions1.json').query().$promise.then(function(transactions) {
	        vm.account.transactions = transactions;
	    });
    }
})();