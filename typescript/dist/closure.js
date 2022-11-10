"use strict";
function clousurify(start) {
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
function cacheDecorator(consumer) {
    const cache = {};
    return (...args) => {
        const argsPrint = args.join("|");
        if (cache[argsPrint]) {
            console.log(`Got precached result <${cache[argsPrint]}> for args: <${argsPrint}>`);
            return cache[argsPrint];
        }
        cache[argsPrint] = consumer(...args);
        return cache[argsPrint];
    };
}
function add(num1, num2) {
    return num1 + num2;
}
const decoratedAdd = cacheDecorator(add);
decoratedAdd(2, 2);
decoratedAdd(2, 3);
decoratedAdd(2, 3);
decoratedAdd(25205, 248294);
decoratedAdd(25205, 248294);
decoratedAdd(1, 1);
//# sourceMappingURL=closure.js.map