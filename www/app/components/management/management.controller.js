(function() {
    'use strict';

    angular
    	.module('app.management')
    	.controller('ManagementController', ManagementController);

    function ManagementController(ManagementAPI) {
        var vm = this;
    }
})();