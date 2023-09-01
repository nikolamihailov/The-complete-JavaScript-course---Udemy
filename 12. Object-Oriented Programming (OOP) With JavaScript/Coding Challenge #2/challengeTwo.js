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

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(miles) {
        this.speed = miles * 1.6;
    }
}

const ford = new CarCl("Ford", 120);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();

console.log(ford.speedUS);
ford.speedUS = 100;
console.log(ford.speed);

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); 