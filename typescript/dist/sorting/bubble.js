"use strict";
function sortBubble(ints) {
    for (let i = ints.length; i > 0; i--) {
        let noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (ints[j] > ints[j + 1]) {
                const temp = ints[j];
                ints[j] = ints[j + 1];
                ints[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap)
            break;
    }
    return ints;
}
//# sourceMappingURL=bubble.js.map