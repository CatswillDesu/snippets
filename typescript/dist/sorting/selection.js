"use strict";
function sortSelection(ints) {
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
        }
    }
    return ints;
}
//# sourceMappingURL=selection.js.map