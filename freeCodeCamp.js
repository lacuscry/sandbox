let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  const glideMixin = function(obj) {
      obj.glide = () => console.log('Flying, wooosh!');
  }
  
  glideMixin(bird);
  glideMixin(boat);