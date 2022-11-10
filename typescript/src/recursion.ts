function factorial(num: number): number {
  if (num == 1) return 1;
  return num * factorial(num - 1);
}

function fibonaci(n: number): number {
  return n <= 1 ? n : fibonaci(n - 1) + fibonaci(n - 2);
}

function power(base: number, exponent: number): number {
  if (exponent == 1) return base;
  return base * power(base, exponent - 1);
}

function product(numbers: number[]): number {
  if (numbers.length === 1) return numbers[0];
  return numbers[0] * product(numbers.slice(1));
}

function recursiveRange(num: number): number {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

function flatten(arr: any[]): any[] {
  return arr.reduce((acc, el) => {
    if (Array.isArray(el)) {
      return [...acc, ...flatten(el)];
    }
    return [...acc, el];
  }, []);
}

function isPalindrome(str: string): boolean {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  return isPalindrome(str.slice(1, -1));
}

function reverse(str: string): string {
  if (str.length === 0) return "";
  return str[str.length - 1] + reverse(str.slice(0, -1));
}

function someRecursive<T>(arr: T[], callback: (el: T) => boolean): boolean {
  for (const item of arr) {
    if (callback(item)) return true;
  }
  return false;
}

function capitalizeFirst(strings: string[]): string[] {
  if (strings.length == 0) return [];
  return [
    strings[0][0].toUpperCase() + strings[0].slice(1),
    ...capitalizeFirst(strings.slice(1))
  ];
}

function collectStrings(obj: { [key: string]: any }): string[] {
  return Object.values(obj).reduce((strings, value) => {
    const typeLiteral = typeof value;
    switch (typeLiteral) {
      case "string": {
        return [...strings, value];
      }

      case "object": {
        if (value === null) return strings;
        return [...strings, ...collectStrings(value)];
      }

      default:
        return strings;
    }
  }, []);
}

function nestedEvenSum(obj: { [key: string]: any }): number {
  return Object.values(obj).reduce((evenSum, value) => {
    const typeLiteral = typeof value;
    switch (typeLiteral) {
      case "number": {
        if (value % 2 == 0) return (evenSum += value);
      }

      case "object": {
        if (value === null) return evenSum;
        return (evenSum += nestedEvenSum(value));
      }

      default:
        return evenSum;
    }
  }, 0);
}

function stringifyNumbers(obj: { [key: string]: any }): { [key: string]: any } {
  const stringified: { [key: string]: any } = {};
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      stringified[key] = obj[key].toString();
      continue;
    }
    if (typeof obj[key] === "object" && obj[key] !== null) {
      stringified[key] = stringifyNumbers(obj[key]);
      continue;
    }
    stringified[key] = obj[key];
  }
  return stringified;
}
