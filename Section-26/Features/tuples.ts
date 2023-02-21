const drink  = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];
// The type defined now in this tuple is simalr to an array but only takes in value paramters, Im still confused on when and why we would use this

const pepsi: [string, boolean, number] = ['brown',true,40];
// Can be redone using the tuple type

const sprite: Drink = ['clear', true, 22]
// This example above uses the tuple as a type

// STILL VERY MUCH CONFUSED WITH TUPLES
