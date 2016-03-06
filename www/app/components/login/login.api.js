(function() {
    'use strict';

	angular
		.module('app.login')
		.factory('Login', Login);

	function Login($http) {
		return {
			template : function() {
				return $http.get();
			}
		};
	}
})();