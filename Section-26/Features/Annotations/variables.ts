// TYPE ANNOTATIONS
const apples : number = 5;
//Adding :number tells TS that appples will only have a number as a value

let speed : string = 'Quick';
// Adding :string tells TS that the speed will only have a string as a value the same as the apples variable

let hasName: boolean = true;
let nothingMuch : null = null;
let nothing : undefined = undefined;
//Same as the first two examples, just showing us that the variables will only accept a value that is of the type defined after the :

let now : Date = new Date();
// We can also assign Built In Javascript Objects as Types

// OBJECT LITERAL ANNOTATIONS
let colors : string[] = ['Red', 'Orange', 'Green', 'Blue'];
// Adding :string[] tells us that we will always have an array that only has strings inside of it

let myNumbers : number[] = [1,2,3,4,5];
let truths : boolean[] = [true,false,true,true,false];
// Same as above, we have arrays that will only take numbers and only takes booleans

class Car{

}
let car : Car = new Car();
// We define a variable car that takes in type Car as defined in the Car class

let point : { x : number, y : number } = {
    x : 10,
    y : 30
};
// We define a variable point which is a Object with tweo Variable X & Y which ar both of type number

const logNumber : (i : number) => void = (i: number) => {
    console.log(i);
};
// The : (i : number) => void  spaghetti is like a comment that tells us what is being parsed into the function and what it will return

//When To Use Annotations
// 1) Function That Returns the 'any' type
const json = '{"x": 10, "y" : 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x : 10, y : 20}
//Line 44 Can Be Fixed By Using Changing It To const coordinates : { x : number, y : number} = JSON.parse(json);

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord;

for(let i = 0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    };
};
// Line 50 can be fixed by adding a type : boolean or setting it to false by dfefault so the compiler knows we are working with a Boolean value

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -2, 12];
//let numbnerAboveZero = false;
let numberAboveZero : boolean | number = false;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i]
    }
}
// To fix this code we must add a : boolean | number type so that we can initialize numberAboveZero as a false value
// Until we check if we have any values above zero to assign to it else it stays a boolean of false

