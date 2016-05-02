(function() {
    'use strict';

    angular
    	.module('accounts.transactions')
    	.controller('TransactionsController', TransactionsController);

    function TransactionsController($resource, $scope, Accounts, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;

        vm.account = {
            name: 'Checking',
            transactions: []
        };

        $resource('app/data/transactions1.json').query().$promise.then(function(transactions) {
	        vm.account.transactions = transactions;
	    });

        $scope.dtColumnDefs = [
          DTColumnDefBuilder.newColumnDef(0).notSortable(),
          DTColumnDefBuilder.newColumnDef(1).notSortable(),
          DTColumnDefBuilder.newColumnDef(2).notSortable(),
          DTColumnDefBuilder.newColumnDef(3).notSortable(),
          DTColumnDefBuilder.newColumnDef(4).notSortable()
       ];
    }
})();