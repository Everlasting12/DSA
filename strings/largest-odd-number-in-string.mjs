function getLargestOddNumberInString(str) {
    let oddIndex = -1
    for (let i = str.length - 1; i >= 0; i--) {
        if (Number(str[i]) % 2 !== 0) {
            oddIndex = i;
            return str.slice(0, oddIndex + 1);
        }
    }

    return ""
}

console.log("getLargestOddNumberInString", getLargestOddNumberInString("35427"))
console.log("getLargestOddNumberInString", getLargestOddNumberInString("4206"))
console.log("getLargestOddNumberInString", getLargestOddNumberInString("52"))