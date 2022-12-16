class DLLNode<T> {
  value: T;
  prev: DLLNode<T> | null;
  next: DLLNode<T> | null;

  constructor(
    value: T,
    prev: DLLNode<T> | null = null,
    next: DLLNode<T> | null = null
  ) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList<T> {
  head: DLLNode<T> | null;
  tail: DLLNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: T): DoublyLinkedList<T> {
    const newNode = new DLLNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop(): DLLNode<T> | undefined {
    if (!this.head) return undefined;

    const removedNode = this.tail!;
    this.length--;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const nodeBefore = this.tail!.prev!;
      nodeBefore.next = null;
      this.tail = nodeBefore;
    }

    removedNode.prev = null;
    return removedNode;
  }

  shift(): DLLNode<T> | undefined {
    if (!this.head) return undefined;

    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head!.prev = null;
    }

    this.length--;
    removedNode.next = null;
    return removedNode;
  }

  unshift(value: T): DoublyLinkedList<T> {
    const newNode = new DLLNode(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(idx: number): DLLNode<T> | undefined {
    if (idx < 0 || idx >= this.length) return undefined;

    const middle = Math.floor(this.length / 2);
    if (idx <= middle) {
      let curr = this.head!;
      for (let i = 0; i !== idx; i++) {
        curr = curr.next!;
      }
      return curr;
    }

    let curr = this.tail!;
    for (let i = this.length - 1; i !== idx; i--) {
      curr = curr.prev!;
    }
    return curr;
  }

  set(idx: number, value: T): boolean {
    const targetNode = this.get(idx);
    if (!targetNode) return false;
    targetNode.value = value;
    return true;
  }

  insert(idx: number, value: T): boolean {
    if (idx === 0) {
      this.unshift(value);
      return true;
    }
    if (idx === this.length) {
      this.push(value);
      return true;
    }

    const nodeBefore = this.get(idx - 1);
    if (!nodeBefore) return false;

    const newNode = new DLLNode(value);
    const nodeAfter = nodeBefore.next!;
    // link node before inserted
    nodeBefore.next = newNode;
    newNode.prev = nodeBefore;

    // link node after inserted
    newNode.next = nodeAfter;
    nodeAfter.prev = newNode;
    this.length++;
    return true;
  }

  remove(idx: number): DLLNode<T> | undefined {
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const removedNode = this.get(idx);
    if (!removedNode) return undefined;

    const nodeBefore = removedNode.prev!;
    const nodeAfter = removedNode.next!;
    nodeBefore.next = nodeAfter;
    nodeAfter.prev = nodeBefore;

    this.length--;
    removedNode.prev = null;
    removedNode.next = null;
    return removedNode;
  }
}
