const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= this.charge * 0.01;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
};

const tesla = new EV("Tesla", 100, 100);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(100);
console.log(tesla);