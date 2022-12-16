class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList<T> {
  length: number;
  head: ListNode<T> | null;
  tail: ListNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value: T): SinglyLinkedList<T> {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    if (this.tail) {
      this.tail.next = node;
      this.tail = this.tail.next;
    }

    this.length++;
    return this;
  }

  pop(): ListNode<T> | undefined {
    if (!this.head) return undefined;

    if (this.length === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode;
    }

    let current = this.head;
    while (current.next && current.next !== this.tail) {
      current = current.next!!;
    }

    const removedNode = current.next!!;
    current.next = null;
    this.tail = current;
    this.length--;
    return removedNode;
  }

  shift(): ListNode<T> | undefined {
    if (!this.head) return undefined;
    const removedNode = this.head;
    if (this.length === 1) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return removedNode;
  }

  unshift(value: T): SinglyLinkedList<T> {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
    if (this.length === 0) {
      this.tail = this.head;
    }
    this.length++;
    return this;
  }

  get(idx: number): ListNode<T> | undefined {
    if (!this.head || idx >= this.length || idx < 0) return undefined;

    let currNode: ListNode<T> | null = this.head;
    for (let i = 0; i < idx; i++) {
      currNode = currNode!!.next!!;
    }

    return currNode;
  }

  set(idx: number, value: T): boolean {
    const nodeToUpdate = this.get(idx);
    if (!nodeToUpdate) return false;
    nodeToUpdate.value = value;
    return true;
  }

  insert(idx: number, value: T): boolean {
    if (idx === this.length) {
      this.push(value);
      return true;
    }
    if (idx === 0) {
      this.unshift(value);
      return true;
    }

    const prevNode = this.get(idx - 1);
    if (!prevNode) return false;
    const newNode = new ListNode(value);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(idx: number): ListNode<T> | undefined {
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    const prevNode = this.get(idx - 1)!!;
    if (!prevNode.next) return undefined;

    const removedNode = prevNode.next!!;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse(): SinglyLinkedList<T> {
    if (!this.head || this.length <= 1) return this;

    this.tail = new ListNode(this.head.value);

    let prev = this.tail;
    let curr: ListNode<T> | null = this.head.next!;
    let next = curr.next;

    while (curr) {
      curr.next = prev;
      prev = curr;
      curr = next;
      if (curr) {
        next = curr.next;
      }
    }

    this.head = prev;
    return this;
  }
}
