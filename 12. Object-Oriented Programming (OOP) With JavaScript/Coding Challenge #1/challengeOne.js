const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;

    // bad way!
    /*    this.accelerate = function () {
           this.speed += 10;
           console.log(`${this.make} going at ${this.speed} km/h`);
       };
       this.brake = function () {
           this.speed -= 5;
           console.log(`${this.make} going at ${this.speed} km/h`);
       }; */
};

// proper way!
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.accelerate();
car2.accelerate();
car2.brake();
car1.brake();

