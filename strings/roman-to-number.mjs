function romanToInt(s: string): number {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    return s.split("").map((i)=> map[i]).reduce((sum, currChar, index, arr) => {
        let nextChar = arr[index + 1];
        if(currChar < nextChar) {
            sum = sum - currChar
        } else {
            sum = sum + currChar
        }
        return sum;
    }, 0)
};

// Input: s = "III"
// Output: 3
// Input: s = "LVIII"
// Output: 58
// Input: s = "MCMXCIV"
// Output: 1994
