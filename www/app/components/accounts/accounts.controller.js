(function() {
    'use strict';

    angular
    	.module('app.accounts')
    	.controller('AccountsController', AccountsController);

    function AccountsController(Accounts) {
        var vm = this;
    }
})();