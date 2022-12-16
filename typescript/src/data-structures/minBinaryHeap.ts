class MinBinaryHeap {
  values: number[];

  constructor() {
    this.values = [];
  }

  insert(value: number): MinBinaryHeap {
    this.values.push(value);

    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (parentIdx >= 0 && this.values[idx] < this.values[parentIdx]) {
      let temp = this.values[parentIdx];
      this.values[parentIdx] = this.values[idx];
      this.values[idx] = temp;

      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }

    return this;
  }

  extractMin(): number | undefined {
    if (!this.values.length) return undefined;
    if (this.values.length === 1) return this.values.pop();

    const popped = this.values.shift();
    this.values.unshift(this.values.pop()!);

    let idx = 0;
    let childrenLeftIdx = idx * 2 + 1;
    let childrenRightIdx = idx * 2 + 2;
    let childrenMin = Math.min(
      this.values[childrenLeftIdx],
      this.values[childrenRightIdx]
    );

    while (this.values[idx] > childrenMin) {
      const swapIdx =
        childrenMin === this.values[childrenLeftIdx]
          ? childrenLeftIdx
          : childrenRightIdx;

      if (swapIdx >= this.values.length) break;

      const temp = this.values[idx];
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = temp;

      idx = swapIdx;
      childrenLeftIdx = idx * 2 + 1;
      childrenRightIdx = idx * 2 + 2;
      childrenMin = Math.min(
        this.values[childrenLeftIdx] || +Infinity,
        this.values[childrenRightIdx] || +Infinity
      );
    }

    return popped;
  }
}
