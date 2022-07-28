function person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

person.prototype.fullname = function() {
    return this.firstName + " " + this.lastName

};
 const myDaughter = new person("Naina","Sana", 20);
 console.log("My daughter is " + myDaughter.fullname() + ". " + "She is " + myDaughter.age + " years old.")