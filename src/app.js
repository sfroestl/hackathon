(function (sandbox) {
    'use strict';

    sandbox.angular.module('app', [])
    .controller('MainCtrl', function ($scope) {
        console.log($scope);

        $scope.input = '';

        $scope.items = [
            1, 2, 3, 4, 5, 'alf', 'kerl'
        ];

        $scope.wuppi = '123';

        $scope.$watch('input', function (newValue) {
            $scope.output = $scope.input + ' jogga';
            console.log($scope.input);
        });
    });
}(this));
