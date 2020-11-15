class Graph {
    constructor() {
      this.adjacentList = {};
      this.noOfNodes = 0;
    }
  
    addVertext(value) {
      this.adjacentList[value] = [];
      this.noOfNodes++;
    }
  
    connectEdge(node1, node2) {
      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
    }
  }
  
  const graph = new Graph();
  graph.addVertext(2);
  graph.addVertext(4);
  graph.addVertext(3);
  graph.addVertext(6);
  graph.addVertext(7);
  graph.connectEdge(2,4);
  graph.connectEdge(4,3);