
    
    const vehicle = {
        type: "duke" , color:"black"
};

    
    Object.freeze(vehicle);

    
    console.log(Object.isFrozen(vehicle));



const vehicle2 = {
    type:"duke",
    color:"blue"
};

console.log(Object.isFrozen(vehicle2));




const returnedTarget = Object.assign(vehicle, vehicle2);

console.log(vehicle);

console.log(returnedTarget);

