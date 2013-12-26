(function (sandbox) {
    'use strict';

    sandbox.angular.module('app', [])
    .controller('app.mainCtrl', function ($scope) {
        $scope.items = [
            1, 2, 3, 4, 5, 'alf', 'kerl'
        ];
    });
}(this));
