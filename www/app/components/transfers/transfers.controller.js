(function() {
    'use strict';

    angular
    	.module('app.transfers')
    	.controller('TransfersController', TransfersController);

    function TransfersController($resource, TransfersAPI) {
        var vm = this;

        $resource('app/data/transfers.json').query().$promise.then(function(transfers) {
	        vm.transfers = transfers;
	    });

        vm.transfer = {
        	fromAccount: 'Select Account',
        	toAccount: 'Select Account',
        	frequency: 'One Time',
        	date: '',
        	memo: ''
        };

        vm.accounts = [
        	{title: 'Checking'},
        	{title: 'Savings'},
        ];
    }
})();