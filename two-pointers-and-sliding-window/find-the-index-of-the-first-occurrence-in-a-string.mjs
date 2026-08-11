
function isEqual(s1, s2) {
    if (s1?.length !== s2?.length) {
        return false;
    }
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            return false;
        }
    }
    return true;
}

function firstOccurance(haystack, needle) {
    if (needle.length > haystack.length) {
        return -1;
    }

    let l = 0;
    let r = needle.length;

    while (l <= (haystack.length - needle.length)) {
        let subString = haystack.slice(l, r);
        if (isEqual(subString, needle)) {
            return l;
        } else {
            l++;
            r++;
        }
    }

    return -1;
}


// let haystack = "sadbutsad", needle = "sad";
let haystack = "hello", needle = "ll"

console.log("firstOccurance(haystack, needle)", firstOccurance(haystack, needle));