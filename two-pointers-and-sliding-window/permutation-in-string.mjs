// 1. store the 0 values for all the alphabets
// 2. increase the count of the letters for first window and the string;
// 3. loop over the bigger string till j reaches the s2.length;
// check if window and string hash matches
//      - if yes, return true;
//      - else, slide the window, but make sure to update the window Hash 





function checkInclusion(s1, s2) {
    let hashS = Array(26).fill(0);
    let hashW = Array(26).fill(0);
    let windowLength = s1.length;

    for (let i = 0; i < windowLength; i++) {
        ++hashS[s1.charCodeAt(i) - 97];
        ++hashW[s2.charCodeAt(i) - 97];
    }

    let i = 0, j = windowLength - 1;

    while (j < s2.length) {
        if (isHashSame(hashS, hashW)) {
            return true;
        }
        else {
            --hashW[s2.charCodeAt(i) - 97];
            ++i;
            ++j;
            ++hashW[s2.charCodeAt(j) - 97]
        }
    }

    return false;

}

function isHashSame(hashS, hashW) {
    for (let i = 0; i < 26; i++) {
        if (hashS[i] !== hashW[i]) {
            return false;
        }
    }
    return true;
}


let s1 = "ab", s2 = "eidbaooo"

console.log("checkInclusion(s1, s2)", checkInclusion(s1, s2))