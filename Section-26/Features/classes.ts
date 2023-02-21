class Vehicle {
    public drive(): void {
        console.log('Chugga Chugga');
    }

    public honk(): void {
        console.log('Beep Beep!')
    }
};

const vehicle = new Vehicle();
// We initalise a class Vehicle above and create a variable vehicle which is a Vehicle and by doing that it has all the properties & methods of the Vehicle class

vehicle.drive();
vehicle.honk();
// Since we created vehicle as a new Vehicle we have all the functions attached to Vehicle too it

class Car extends Vehicle {
    // We are getting the error here because we are trying to override a parent method from the Vehicle class
    private drive(): void {
        console.log('Vroooo Paaaa');
    }

    startDriving() : void {
        this.drive()
    }
    // We set the drive method to be private so we cant call it outside the funtion, 
};
// We add on the extends keyword which allows us to make a new class name Car but with the properties of Vehicle class already added

const car = new Car();
// Here we have a car of type Car which has all the Vehicle methods attached to it