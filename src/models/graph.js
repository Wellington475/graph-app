import revalidator  from 'revalidator';

import Edge from './edge';
import Node from './node';
import * as graphSchema from '../schema/graph';

class Graph {
  constructor(data) {
    const validate = revalidator.validate(data, graphSchema);

    if (validate.valid == false) {
      this.errors = validate.errors;
      return;
    }

    this.nodes = new Array();
    this.edges = new Array();

    data.nodes.map(node => {
      this.nodes.push(new Node(node));
    });

    data.edges.map(edge => {
      this.edges.push(new Edge(edge, this.nodes));
    });
  }
}

export default Graph;
