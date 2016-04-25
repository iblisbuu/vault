(function() {
    'use strict';

	angular
		.module('app.billing')
		.factory('BillingAPI', BillingAPI);

	function BillingAPI($http) {
		return {
			template : function() {
				return $http.get();
			}
		};
	}
})();