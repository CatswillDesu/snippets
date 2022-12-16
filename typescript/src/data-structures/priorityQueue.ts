// Priority Queues implement almost the same logic as MinBinaryHeaps
class PQNode<T> {
  value: T;
  priority: number;

  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue<T> {
  nodes: PQNode<T>[];

  constructor() {
    this.nodes = [];
  }

  enqueue(value: T, priority: number): PriorityQueue<T> {
    const newNode = new PQNode(value, priority);
    this.nodes.push(newNode);

    let idx = this.nodes.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (
      parentIdx >= 0 &&
      this.nodes[idx].priority < this.nodes[parentIdx].priority
    ) {
      let temp = this.nodes[parentIdx];
      this.nodes[parentIdx] = this.nodes[idx];
      this.nodes[idx] = temp;

      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }

    return this;
  }

  dequeue(): PQNode<T> | undefined {
    if (!this.nodes.length) return undefined;
    if (this.nodes.length === 1) return this.nodes.pop();

    const popped = this.nodes.shift();
    this.nodes.unshift(this.nodes.pop()!);

    let idx = 0;
    let childrenLeftIdx = idx * 2 + 1;
    let childrenRightIdx = idx * 2 + 2;
    let minPiority = Math.min(
      this.nodes[childrenLeftIdx].priority,
      this.nodes[childrenRightIdx].priority
    );

    while (this.nodes[idx].priority > minPiority) {
      const swapIdx =
        minPiority === this.nodes[childrenLeftIdx].priority
          ? childrenLeftIdx
          : childrenRightIdx;

      if (swapIdx >= this.nodes.length) break;
      const temp = this.nodes[idx];
      this.nodes[idx] = this.nodes[swapIdx];
      this.nodes[swapIdx] = temp;
      idx = swapIdx;
      childrenLeftIdx = idx * 2 + 1;
      childrenRightIdx = idx * 2 + 2;
      minPiority = Math.min(
        // get left children's index if it does exist in queue
        (this.nodes[childrenLeftIdx] && this.nodes[childrenLeftIdx].priority) ||
          +Infinity,
        // get right children's index if it does exist in queue
        (this.nodes[childrenRightIdx] &&
          this.nodes[childrenRightIdx].priority) ||
          +Infinity
      );
    }

    return popped;
  }
}
