function clousurify(start: number): () => number {
  return () => {
    return start++;
  };
}

for (let i = 0; i < 10; i++) {
  (() => {
    let a = 3;
    let b = 3;
    console.log(a, b);
    a++;
    b++;
  })();
}

const ticker = clousurify(5);
for (let i = 0; i < 10; i++) {
  console.log(ticker());
}

function cacheDecorator(
  consumer: (...args: any[]) => any
): (...args: any[]) => any {
  const cache: { [key: string]: any } = {};
  return (...args: any[]) => {
    const argsPrint = args.join("|");
    if (cache[argsPrint]) {
      console.log(
        `Got precached result <${cache[argsPrint]}> for args: <${argsPrint}>`
      );
      return cache[argsPrint];
    }
    cache[argsPrint] = consumer(...args);
    return cache[argsPrint];
  };
}

function add(num1: number, num2: number): number {
  return num1 + num2;
}

const decoratedAdd = cacheDecorator(add);
decoratedAdd(2, 2);
decoratedAdd(2, 3);
decoratedAdd(2, 3);
decoratedAdd(25205, 248294);
decoratedAdd(25205, 248294);
decoratedAdd(1, 1);
