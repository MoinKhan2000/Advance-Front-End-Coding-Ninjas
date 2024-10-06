class cars {
  constructor() {
    this.car = "BMW"
  }
  display() {
    console.log("The car is a " + this.car);
  }
}

let c = new cars();
let func = c.display.bind(c);
func();