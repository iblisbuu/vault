(function() {
    'use strict';

	angular
		.module('app.accounts')
		.factory('Accounts', Accounts);

	function Accounts($http) {
		return {
			template : function() {
				return $http.get();
			}
		};
	}
})();