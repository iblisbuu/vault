(function() {
    'use strict';

    angular
    	.module('app.login')
    	.controller('LoginController', LoginController);

    function LoginController($state, Login) {
        var vm = this;

        vm.login = function() {
        	$state.go('template');
        };
    }
})();