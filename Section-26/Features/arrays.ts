const carMakers: string[] = ['fords', 'toyota', 'vw'];
const carArray : string[] = [];
// We add array types wehn initialise it so we dont have the any type, unless we initialise it with data like in line 1

const carsBymake = [
    ['f150'],
    ['corolla'],
    ['polo']
];
const carsBymaker : string[][] = [];
// WE have the same example as above where we need to inililise when there is no data inside but we have here an array of string arrays

const flexiDate: (Date | String)[] = [new Date()];
// WE see in the example aboee we are able to assign two types to the date so it will be able toi take either or value in the array
// These are called flexible types
