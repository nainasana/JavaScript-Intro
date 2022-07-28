function vehicle1() { this.name = 'pulsar';
 }
function vehicle2() { vehicle1.call(this) 
}
vehicle2.prototype = Object.create(vehicle1.prototype);

const select = new vehicle2();

console.log(select.name);