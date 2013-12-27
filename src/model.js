(function (sandbox) {

    'use strict';

    function Car(name) {
        this.name = name;
    }

    Car.prototype.sayHallo = function () {
        console.log('Hello, I\'m a ' + this.name);
    };

    sandbox.CarFactory = {
        createCar: function (name) {
            return new Car(name);
        }
    };

}(this));

