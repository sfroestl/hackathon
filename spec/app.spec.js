(function (sandbox) {
    'use strict';

    describe('mainCtrl', function () {
        var mainCtrl, $controller, $rootScope, $scope;

        beforeEach(module('app'));

        beforeEach(inject(function (_$controller_, _$rootScope_) {
            $rootScope = _$rootScope_;
            $controller = _$controller_;
        }));

        beforeEach(function () {
            $scope = $rootScope.$new();
            mainCtrl = $controller('MainCtrl', {
                $scope: $scope
            });
        });

        it('has items', function () {
            expect($scope.items.length).toEqual(7);
        });
    });
}(this));
