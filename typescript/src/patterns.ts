// frequency counter
function fcAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;
  const freqCounter1: { [key: string]: number } = {};
  const freqCounter2: { [key: string]: number } = {};
  for (let char of str1) {
    freqCounter1[char] = ++freqCounter1[char] || 1;
  }
  for (let char of str2) {
    freqCounter2[char] = ++freqCounter2[char] || 1;
  }

  for (const char in freqCounter1) {
    if (!(char in freqCounter2)) return false;
    if (freqCounter1[char] !== freqCounter2[char]) return false;
  }
  return true;
}

function sameFrequency(int1: number, int2: number): boolean {
  if (int1.toString().length !== int2.toString().length) return false;

  const counter1: { [key: string]: number } = {};
  const counter2: { [key: string]: number } = {};
  for (const digit of int1.toString()) {
    counter1[digit] = ++counter1[digit] || 1;
  }

  for (const digit of int2.toString()) {
    counter2[digit] = ++counter2[digit] || 1;
  }

  for (const digit in counter1) {
    if (!(digit in counter2)) return false;
    if (counter1[digit] !== counter2[digit]) return false;
  }

  return true;
}

type primitive = boolean | number | string;

function areThereDuplicates<T extends primitive>(...args: T[]): boolean {
  const uniqueVals: { [key: string]: true } = {};
  for (const val of args) {
    if (uniqueVals[val.toString()]) return true;
    uniqueVals[val.toString()] = true;
  }
  return false;
}

// multiple pointers
function countUniqueInts(ints: number[]): number {
  if (!ints.length) return 0;
  const sorted = ints.sort((a, b) => a - b);
  let count = 1;
  let i = 0;
  for (let j = 0; j < sorted.length; j++) {
    if (sorted[j] !== sorted[i]) {
      count++;
      i = j;
    }
  }
  return count;
}

function hasAveragePair(ints: number[], average: number): boolean {
  let left = 0;
  let right = ints.length - 1;

  while (left < right) {
    const result = (ints[left] + ints[right]) / 2;
    if (result < average) {
      left++;
    } else if (result > average) {
      right--;
    } else {
      return true;
    }
  }

  return false;
}

function isSubsequence(substr: string, input: string): boolean {
  let i = 0;
  for (let j = 0; j < input.length; j++) {
    if (i >= substr.length) return true;
    if (substr[i] === input[j]) i++;
  }

  return substr.length === i;
}

// sliding window
function findLongestSubstring(str: string): number {
  let max = 0;
  let window = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let j = window.indexOf(char);
    if (j > -1) {
      window = window.slice(j + 1);
    }
    window += char;
    max = Math.max(window.length, max);
  }

  return max;
}

function maxSubarraySum(ints: number[], length: number): number | null {
  if (ints.length < length) return null;

  let start = 0;
  let max = 0;
  for (let i = 0; i < length; i++) {
    max += ints[i];
  }
  let temp = max;
  for (let i = length; i < ints.length; i++) {
    temp = temp - ints[start++] + ints[i];
    max = Math.max(temp, max);
  }
  return max;
}

function minSubArrayLen(ints: number[], sum: number): number {
  let start = 0;
  let min = +Infinity;
  let temp = 0;

  for (let i = 0; i < ints.length; i++) {
    temp += ints[i];
    if (temp >= sum) {
      const windowLength = i - start + 1;
      temp -= ints[start++] + ints[i--];
      min = Math.min(windowLength, min);
    }
  }

  if (min === +Infinity) return 0;
  return min;
}
