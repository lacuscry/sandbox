const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let changedFullName;

  
  this.getFullName = () => changedFullName || firstAndLast;
  this.getFirstName = () => changedFullName?.split(' ')[0] || firstAndLast?.split(' ')[0];
  this.getLastName = () => changedFullName?.split(' ')[1] || firstAndLast?.split(' ')[1];


  this.setFullName = newFullName => {
    changedFullName = newFullName;
  };

  this.setFirstName = newFirstName => {
    this.setFullName(`${newFirstName} ${this.getLastName()}`);
  };

  this.setLastName = newLastName => {
    this.setFullName(`${this.getFirstName()} ${newLastName}`);
  };


  return firstAndLast;
};

const bob = new Person('Bob Ross');