"use strict";
function factorial(num) {
    if (num == 1)
        return 1;
    return num * factorial(num - 1);
}
function fibonaci(n) {
    return n <= 1 ? n : fibonaci(n - 1) + fibonaci(n - 2);
}
function power(base, exponent) {
    if (exponent == 1)
        return base;
    return base * power(base, exponent - 1);
}
function product(numbers) {
    if (numbers.length === 1)
        return numbers[0];
    return numbers[0] * product(numbers.slice(1));
}
function recursiveRange(num) {
    if (num === 0)
        return 0;
    return num + recursiveRange(num - 1);
}
function flatten(arr) {
    return arr.reduce((acc, el) => {
        if (Array.isArray(el)) {
            return [...acc, ...flatten(el)];
        }
        return [...acc, el];
    }, []);
}
function isPalindrome(str) {
    if (str.length === 1)
        return true;
    if (str.length === 2)
        return str[0] === str[1];
    return isPalindrome(str.slice(1, -1));
}
function reverse(str) {
    if (str.length === 0)
        return "";
    return str[str.length - 1] + reverse(str.slice(0, -1));
}
function someRecursive(arr, callback) {
    for (const item of arr) {
        if (callback(item))
            return true;
    }
    return false;
}
function capitalizeFirst(strings) {
    if (strings.length == 0)
        return [];
    return [
        strings[0][0].toUpperCase() + strings[0].slice(1),
        ...capitalizeFirst(strings.slice(1))
    ];
}
function collectStrings(obj) {
    return Object.values(obj).reduce((strings, value) => {
        const typeLiteral = typeof value;
        switch (typeLiteral) {
            case "string": {
                return [...strings, value];
            }
            case "object": {
                if (value === null)
                    return strings;
                return [...strings, ...collectStrings(value)];
            }
            default:
                return strings;
        }
    }, []);
}
function nestedEvenSum(obj) {
    return Object.values(obj).reduce((evenSum, value) => {
        const typeLiteral = typeof value;
        switch (typeLiteral) {
            case "number": {
                if (value % 2 == 0)
                    return (evenSum += value);
            }
            case "object": {
                if (value === null)
                    return evenSum;
                return (evenSum += nestedEvenSum(value));
            }
            default:
                return evenSum;
        }
    }, 0);
}
function stringifyNumbers(obj) {
    const stringified = {};
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
//# sourceMappingURL=recursion.js.map