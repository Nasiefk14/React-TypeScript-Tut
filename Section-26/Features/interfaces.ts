const oldTazz = {
    name : 'Tazz',
    year: 2000,
    broken : false
};

const printVehicle = (vehicle: {name : string;year : number;broken: boolean}) : void => {
    console.log(`Name : ${vehicle.name}`)
    console.log(`Name : ${vehicle.year}`)
    console.log(`Name : ${vehicle.broken}`)
};

printVehicle(oldTazz);
// This is how we would do things in JS , we will adapt the type annotation in the printVehicle function with TS Interfaces

interface Vehicle {
    name : string,
    year : number,
    broken :boolean
};

const oldCivic = {
    name : 'Civic',
    year: 1998,
    broken : true
}

const printVehicles = (vehicle : Vehicle) : void => {
    console.log(`Name : ${vehicle.name}`)
    console.log(`Name : ${vehicle.year}`)
    console.log(`Name : ${vehicle.broken}`)
};

printVehicles(oldCivic);
// By doing this we make the code cleaner and we tell thefunction that in order to use the printVehicles function it must pass in a object that meets the Vehicle interface specifications
 