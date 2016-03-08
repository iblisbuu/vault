(function() {
    'use strict';

    angular
    	.module('app.accounts')
    	.controller('AccountsController', AccountsController);

    function AccountsController($resource, Accounts) {
        var vm = this;

        $resource('app/data/data.json').query().$promise.then(function(accounts) {
	        vm.accounts = accounts;
	    });
    }
})();