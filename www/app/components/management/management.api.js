(function() {
    'use strict';

	angular
		.module('app.management')
		.factory('ManagementAPI', ManagementAPI);

	function ManagementAPI($http) {
		return {
			template : function() {
				return $http.get();
			}
		};
	}
})();