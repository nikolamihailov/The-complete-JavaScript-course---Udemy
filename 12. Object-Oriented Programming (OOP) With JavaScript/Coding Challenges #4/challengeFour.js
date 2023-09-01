class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }
}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    accelerate() {
        this.speed += 10;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
}

const tesla = new EVCl("Tesla", 100, 50);
tesla.accelerate().accelerate().accelerate().brake();
tesla.accelerate().chargeBattery(100);
