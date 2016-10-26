(function() {
    'use strict';

    angular
        .module('myApp', [
          'app.core',
          'app.layout',
          'app.cache',
          'app.auth',
          'app.login',
          'app.dashboard',
        ]);
})();
