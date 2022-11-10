"use strict";
function splitToCharcodes(str) {
    return str.split("").map((char, idx) => char.charCodeAt(idx));
}
function charcodesListToString(charcodes) {
    return charcodes.map(code => String.fromCharCode(code) || "").join("");
}
function arrToSinglyLinkedList(arr) {
    if (!arr || !arr.length)
        return new ListNode();
    let linkedList = new ListNode(arr[0], null);
    let currListItem = linkedList;
    for (let i = 1; i < arr.length; i++) {
        currListItem.next = new ListNode(arr[i], null);
        currListItem = currListItem.next;
    }
    return linkedList;
}
function reverseStr(str) {
    return str.split("").reverse().join("");
}
function spliceStr(str, start, deleteCount, replacingStr) {
    const arr = str.split("");
    arr.splice(start, deleteCount, replacingStr);
    return arr.join("");
}
/////////////////////////////_________SOLUTION_________//////////////////////////////////////////
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function addTwoNumbers(l1, l2) {
    let firstNum = "";
    if (l1 !== null) {
        let currItem = l1;
        while (currItem.next !== null) {
            firstNum = spliceStr(firstNum, 0, 0, currItem.val + "");
            currItem = currItem.next;
        }
        firstNum = spliceStr(firstNum, 0, 0, currItem.val + "");
    }
    let secondNum = "";
    if (l2 !== null) {
        let currItem = l2;
        while (currItem.next !== null) {
            secondNum = spliceStr(secondNum, 0, 0, currItem.val + "");
            currItem = currItem.next;
        }
        secondNum = spliceStr(secondNum, 0, 0, currItem.val + "");
    }
    if (isNaN(+firstNum) || isNaN(+secondNum))
        return null;
    const sumReversed = reverseStr((+firstNum + +secondNum).toString());
    let tempListItem = new ListNode(sumReversed[0], null);
    let sumReversedList = tempListItem;
    for (let i = 1; i < sumReversed.length; i++) {
        tempListItem.next = new ListNode(+sumReversed[i], null);
        tempListItem = tempListItem.next;
    }
    return sumReversedList;
}
// const listOne = arrToSinglyLinkedList([2, 9, 1, 7]);
// const listTwo = arrToSinglyLinkedList([4, 2, 2, 0]);
const listOne = arrToSinglyLinkedList([9, 3, 3]);
const listTwo = arrToSinglyLinkedList([5, 6, 4]);
console.log(JSON.stringify(addTwoNumbers(listOne, listTwo), null, 4));
//# sourceMappingURL=linkedListSumReversed.js.map