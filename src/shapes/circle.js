import Vector from '../math/vector';

class Circle {
  constructor(location) {
    const {x, y} = location;
    this.location = new Vector(x, y);
  }
}

export default Circle;
