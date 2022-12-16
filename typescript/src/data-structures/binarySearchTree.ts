class BSTNode {
  value: number;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: BSTNode | null;

  constructor() {
    this.root = null;
  }

  private getInsertionNode(node: BSTNode, value: number): BSTNode | undefined {
    if (node.value === value) return undefined;

    const nextNode = value < node.value ? node.left : node.right;
    if (!nextNode) return node;

    return this.getInsertionNode(nextNode, value);
  }

  insert(value: number): BinarySearchTree {
    const newNode = new BSTNode(value);
    if (!this.root) {
      this.root = newNode;
    }

    const insertionNode = this.getInsertionNode(this.root, value);
    if (!insertionNode) return this;

    if (value < insertionNode.value) {
      insertionNode.left = newNode;
      return this;
    } else {
      insertionNode.right = newNode;
      return this;
    }
  }

  contains(value: number, node: BSTNode | null = this.root): boolean {
    if (!node) return false;
    if (node.value === value) return true;

    if (node.value > value) {
      if (!node.left) return false;
      return this.contains(value, node.left);
    }

    if (!node.right) return false;
    return this.contains(value, node.right);
  }

  breadthFirstSearch(
    entryNode: BSTNode | null = this.root,
    queue: number[] = []
  ): number[] {
    if (!this.root) return [];
    if (!queue.length) queue.push(this.root.value);

    const output = [];
    if (entryNode && queue.length) {
      output.push(queue.shift()!);

      if (entryNode.left) queue.push(entryNode.left.value);
      if (entryNode.right) queue.push(entryNode.right.value);

      if (entryNode.left) {
        output.push(...this.breadthFirstSearch(entryNode.left, queue));
      }
      if (entryNode.right) {
        output.push(...this.breadthFirstSearch(entryNode.right, queue));
      }
    }

    return output;
  }

  preOrderSearch(entryNode = this.root): number[] {
    if (!entryNode) return [];
    const output = [entryNode.value];

    if (entryNode.left) output.push(...this.preOrderSearch(entryNode.left));
    if (entryNode.right) output.push(...this.preOrderSearch(entryNode.right));

    return output;
  }

  postOrderSearch(entryNode = this.root): number[] {
    if (!entryNode) return [];
    const output = [];

    if (entryNode.left) output.push(...this.postOrderSearch(entryNode.left));
    if (entryNode.right) output.push(...this.postOrderSearch(entryNode.right));
    output.push(entryNode.value);

    return output;
  }

  inOrderSearch(entryNode = this.root): number[] {
    if (!entryNode) return [];
    const output = [];

    if (entryNode.left) output.push(...this.inOrderSearch(entryNode.left));
    output.push(entryNode.value);
    if (entryNode.right) output.push(...this.inOrderSearch(entryNode.right));

    return output;
  }
}
