(function() {
    'use strict';

	angular
		.module('app.template')
		.config(function($stateProvider) {
		    $stateProvider
			    .state('template', {
					url: '/template',
					templateUrl: 'app/components/template/template.html',
					controller: 'TemplateController',
					controllerAs: 'vm'
		    	});
		});
})();