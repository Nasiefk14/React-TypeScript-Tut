const add = (a : number, b : number) : number => {
    return a + b;
};
// We add the number as a type of the inputs as well as adding the number as a type in the fucntion so that the function will always expect a number as a return value
// Adding the number as the function type give us a chcek that makes sure we return a number
// It will check whether the function returns the proper value type but not the logic within the function
// When adding an anottation type we need to have a return type in the function body

function divide(a :number, b: number) : number {
    return a/b;
};
const multiple = function(a: number, b: number) : number {
    return  a*b;
}
// ABove examples show that whether we use a name function(line 9) or we use a anonymous function(line 12) we always assing a type with a return value

