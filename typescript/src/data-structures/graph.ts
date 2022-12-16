class Graph {
  adjacencyList: { [key: string]: string[] };

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: string, vertex2: string) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex: string) {
    this.adjacencyList[vertex].forEach(v => {
      console.log(`removing edges [${vertex}] and [${v}]`);
      this.removeEdge(vertex, v);
    });
    delete this.adjacencyList[vertex];
  }

  depthFirstSearch(entryVertex: string): string[] {
    const output: string[] = [];
    const visited: { [key: string]: boolean } = {};

    const dfsHelper = (vertex: string) => {
      output.push(vertex);
      visited[vertex] = true;

      this.adjacencyList[vertex].forEach(v => {
        if (!visited[v]) {
          dfsHelper(v);
        }
      });
    };

    dfsHelper(entryVertex);

    return output;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph.depthFirstSearch("A"));
