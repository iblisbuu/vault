(function() {
    'use strict';

    angular
    	.module('app.billing')
    	.controller('BillingController', BillingController);

    function BillingController(BillingAPI) {
        var vm = this;
    }
})();