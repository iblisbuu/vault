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

        $resource('app/data/transfers.json').query().$promise.then(function(transfers) {
            vm.recurringTransfers = transfers;
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
        	{title: 'Savings'}
        ];

        vm.cancelRecurringTransfer = function(index){
            vm.recurringTransfers.splice(index, 1);
        }

        vm.setFromAccount = function(account){
            vm.transfer.fromAccount = account;
        }

        vm.setToAccount = function(account){
            vm.transfer.toAccount = account;
        }

        vm.setFrequency = function(frequency){
            vm.transfer.frequency = frequency;
        }
    }
})();