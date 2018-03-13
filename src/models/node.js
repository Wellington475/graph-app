import Circle from '../shapes/circle';

class Node extends Circle {

  constructor(data) {
      super(data.location);

      this.id    = data.id;
      this.label = data.label;
  }

  getLabel() {
    return this.label;
  }

  setLabel(label) {
    this.label = label;
  }
}

export default Node;
