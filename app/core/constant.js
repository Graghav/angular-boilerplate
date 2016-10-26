(function() {
    'use strict';

    var core = angular.module('app.core');

    var base = "SERVER_IP";

    var endpoints = {
        login : base + "/login"
    };

    var apiEndpoints = {
      base : base,
      path : endpoints
    }

    core.constant('apiEndpoints', apiEndpoints);

})();
