(function() {
    'use strict';

	angular
		.module('app.transfers')
		.factory('TransfersAPI', TransfersAPI);

	function TransfersAPI($http) {
		return {
			template : function() {
				return $http.get();
			}
		};
	}
})();