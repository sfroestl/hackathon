(function (sandbox) {
    'use strict';

    describe('Car', function () {

        // beforeEach(module(Car));

        var bmw = sandbox.CarFactory.createCar('bmw');

        it('has a name', function () {
            expect(bmw.name).toEqual('bmw');
        });
    });
}(this));
