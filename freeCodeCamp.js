function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.eat = Animal.prototype.eat;
Dog.prototype.bark = () => console.log('Woof!');
Dog.prototype.constructor = Dog;
// Only change code above this line

let beagle = new Dog();