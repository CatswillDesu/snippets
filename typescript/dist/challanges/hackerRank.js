"use strict";
function sockMerchant(n, ar) {
    const sockCounts = {};
    for (const sock of ar) {
        sockCounts[sock] = ++sockCounts[sock] || 1;
    }
    let pairsCount = 0;
    for (const colorId in sockCounts) {
        pairsCount += Math.floor(sockCounts[colorId] / 2);
    }
    return pairsCount;
}
function minimumSwaps(ints) {
    let swaps = 0;
    for (let i = 0; i < ints.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < ints.length; j++) {
            if (ints[j] < ints[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            const temp = ints[minIdx];
            ints[minIdx] = ints[i];
            ints[i] = temp;
            swaps++;
        }
    }
    return swaps;
}
class StaffList {
    membersMap;
    constructor(members) {
        this.membersMap = members.reduce((map, member) => {
            const { name, age } = member;
            const keyprint = `${name}|${age}`;
            if (!(keyprint in map)) {
                const [isValid] = this.validate(member);
                if (!isValid)
                    return map;
                return {
                    [keyprint]: member,
                    ...map
                };
            }
            return map;
        }, {});
    }
    validate(member) {
        if (member.age <= 20) {
            return [false, "Staff member age must be greater than 20"];
        }
        return [true];
    }
    add(name, age) {
        const [isValid, errMsg] = this.validate({ name, age });
        if (!isValid)
            throw new Error(errMsg);
        const keyprint = `${name}|${age}`;
        if (!(keyprint in this.membersMap)) {
            this.membersMap[keyprint] = { name, age };
        }
    }
    remove(name) {
        let keys = Object.keys(this.membersMap);
        for (let keyprint of keys) {
            const delimiterIdx = keyprint.indexOf("|");
            const membName = keyprint.slice(0, delimiterIdx);
            if (membName === name) {
                const { [keyprint]: removed, ...filteredMap } = this.membersMap;
                this.membersMap = filteredMap;
                return true;
            }
        }
        return false;
    }
    getSize() {
        return Object.keys(this.membersMap).length;
    }
}
const membArr = [
    {
        name: "Bob",
        age: 33
    },
    {
        name: "Max",
        age: 20
    },
    {
        name: "Rick",
        age: 53
    },
    {
        name: "Max",
        age: 20
    }
];
function countSubtractionPairs(k, ints) {
    // insertion sorting + extra operations
    for (let i = 1; i < ints.length; i++) {
        const iVal = ints[i];
        let j = i - 1;
        for (j; j >= 0 && iVal < ints[j]; j--) {
            ints[j + 1] = ints[j];
            setTimeout(() => 1);
        }
        if (j < i - 1) {
            ints[j + 1] = iVal;
        }
    }
    return 1;
}
// console.log(countSubtractionPairs(2, [1, 5, 3, 4, 2]));
function superDigit(n, k) {
    console.log(n);
    if (n.length === 1)
        return +n;
    const currSuper = n.split("").reduce((sum, int) => (sum += +int), 0);
    return superDigit(`${superDigit(`${currSuper}`, 1) * k}`, 1);
}
console.log(superDigit("999", 10));
//# sourceMappingURL=hackerRank.js.map