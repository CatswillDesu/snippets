"use strict";
// linear search
function linearSearch(arr, searchVal) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchVal)
            return i;
    }
    return -1;
}
// binary search
// упростил тип элементов до number, чтобы не ебаться с чаркодами в строках при сортировке
function binarySearch(arr, searchVal) {
    const sorted = arr.sort((a, b) => a - b);
    let start = 0;
    let end = sorted.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (sorted[middle] === searchVal)
            return middle;
        if (searchVal > sorted[middle])
            start = middle + 1;
        if (searchVal < sorted[middle])
            end = middle - 1;
    }
    return -1;
}
//# sourceMappingURL=binarySearch.js.map