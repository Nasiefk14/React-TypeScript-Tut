const profile = {
    name: 'Alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 90
    },
    setAge(age: number){
        this.age = age
    }
};
// What we do here is deine the profile object and inside the object we update the age value using the ES2015 standards to update it

const { age } : { age : number } = profile;
// When we destructure a value we have to add in its expected strcture within the property we are getting it from as the type
//const { coords: { lat, lng } } = profile; /// ES2015 destructuring syntax
const { coords: { lat, lng } } : { coords : { lat: number; lng: number } } = profile; // New Descturing Annotation Syntax
