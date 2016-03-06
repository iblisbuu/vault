(function() {
    'use strict';

	angular
		.module('app.template')
		.factory('TemplateAPI', TemplateAPI);

	function TemplateAPI($http) {
		return {
			template : function() {
				return $http.get();
			}
		};
	}
})();