class Edges {

  constructor(data, nodes) {
    const nodeStart = nodes.filter(node => (data.from == node.id))[0];
    const nodeEnd = nodes.filter(node => (data.to == node.id))[0];

    this.nodeStart = nodeStart;
    this.nodeEnd   = nodeEnd;
    this.id        = `${nodeStart.label}-${nodeEnd.label}`;
    this.weight    = data.weight;
  }

  getId() {
    return this.id;
  }

  getNodeStart() {
    return this.nodeStart;
  }

  getNodeEnd() {
    return this.nodeEnd;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(weight) {
    this.weight = weight;
  }
}

export default Edges;
