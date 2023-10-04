class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
  }

  getRadius() {
      return this.radius;
  }

  setRadius(radius) {
      this.radius = radius;
  }

  getColor() {
      return this.color;
  }

  setColor(colorg) {
      this.color = color;
  }

  getArea() {
      return Math.PI * Math.pow(this.radius, 2);
  }

  getCircumference(){
      return 2 * Math.PI * this.radius;
  }
}


const myCircle = new Circle(5, 'red');
console.log(myCircle.getRadius()); 
console.log(myCircle.getColor()); 
console.log(myCircle.getArea());  
console.log(myCircle.getCircumference());  
