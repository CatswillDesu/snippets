function primitiveHash(key: string, arrayLen: number): number {
  return key
    .split("")
    .reduce((total, char) => total + (char.charCodeAt(0) % arrayLen), 0);
}

function betterHash(key: string, arrayLen: number): number {
  let total = 0;
  const UNIQUE_PRIME = 1337;
  for (let i = 0; i < Math.min(100, key.length); i++) {
    total = (total * UNIQUE_PRIME + key.charCodeAt(i)) % arrayLen;
  }
  return total;
}

class HashMap<T> {
  hashMap: [string, T][][];
  private uniquePrime: number;

  constructor(size: number, uniquePrime: number = 1337) {
    this.hashMap = Array.from({ length: size }, () => []);
    this.uniquePrime = uniquePrime;
  }

  private hash(key: string) {
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 150); i++) {
      const charcode = key.charCodeAt(i);
      total = (total * this.uniquePrime + charcode) % this.hashMap.length;
    }
    return total;
  }

  set(key: string, value: T): HashMap<T> {
    const hash = this.hash(key);
    this.hashMap[hash].push([key, value]);
    return this;
  }

  get(key: string): T | undefined {
    const hash = this.hash(key);
    const pairs = this.hashMap[hash];

    if (!pairs.length) return undefined;
    if (pairs.length === 1) return pairs[0][1];
    return pairs.find(pair => pair[0] === key)![1];
  }

  keys(): string[] {
    return this.hashMap.reduce<string[]>((keys, pairs) => {
      if (!pairs.length) return keys;
      const keysSet = pairs.map(pair => pair[0]);
      keys.push(...keysSet);
      return keys;
    }, []);
  }

  values(): T[] {
    return this.hashMap.reduce<T[]>((keys, pairs) => {
      if (!pairs.length) return keys;
      const valuesSet = pairs.map(pair => pair[1]);
      keys.push(...valuesSet);
      return keys;
    }, []);
  }
}
