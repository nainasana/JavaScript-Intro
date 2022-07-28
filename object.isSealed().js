const vehicle1 = {
    type1: "TVS", color:"black"
};
console.log(Object.isSealed(vehicle1));
// expected output: false

Object.seal(vehicle1);

console.log(Object.isSealed(vehicle1));
// expected output: true
