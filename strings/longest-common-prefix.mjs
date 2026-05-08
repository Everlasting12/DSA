function getLongestCommonPrefix(strs) {
    let j = 0;

    while (j < strs[0].length) {
        let ch = strs[0][j];

        for (let i = 1; i < strs.length; i++) {
            if (ch !== strs[i][j] || j == strs[i].length) {
                return strs[0].substring(0, j)
            }
        }
        j++
    }
    return strs[0];
}


const arr = ["flower", "flow", "flight"]

console.log("getLongestCommonPrefix", getLongestCommonPrefix(arr))