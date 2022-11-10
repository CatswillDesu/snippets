function sortInsertion(ints: number[]): number[] {
  for (let i = 1; i < ints.length; i++) {
    const iVal = ints[i];
    let j = i - 1;
    for (j; j >= 0 && iVal < ints[j]; j--) {
      ints[j + 1] = ints[j];
    }
    if (j < i - 1) {
      ints[j + 1] = iVal;
    }
  }
  return ints;
}
