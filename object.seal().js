const vehicle1 = {
    type1: "TVS Jupiter"
};
Object.seal(vehicle1);
vehicle1.type1 = "TVS Apache";
console.log(vehicle1.type1);

delete vehicle1.type1; // cannot delete when sealed  
console.log(vehicle1.type1);

const vehicle2 = {
    type2: "Yamaha"
};
vehicle2.type2 = "Honda SP";
console.log(vehicle2.type2);  