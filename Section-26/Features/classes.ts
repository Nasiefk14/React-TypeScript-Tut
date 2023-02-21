class Vehicle {
    drive(): void {
        console.log('Chugga Chugga');
    }

    honk(): void {
        console.log('Beep Beep!')
    }
};

const vehicle = new Vehicle();
// We initalise a class Vehicle above and create a variable vehicle which is a Vehicle and by doing that it has all the properties & methods of the Vehicle class

vehicle.drive();
vehicle.honk();
// Since we created vehicle as a new Vehicle we have all the functions attached to Vehicle too it