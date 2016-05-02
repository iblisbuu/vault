(function() {
    'use strict';

    angular
    	.module('app.billing')
    	.controller('BillingController', BillingController);

    function BillingController($resource, BillingAPI) {
        var vm = this;

        vm.transactions = [];

        $resource('app/data/transactions1.json').query().$promise.then(function(transactions) {
	        vm.transactions = transactions;
	    });
    }
})();