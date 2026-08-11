


function firstOccurance(haystack, needle) {
    if (needle.length > haystack.length) {
        return -1;
    }

    for (let i = 0; i <= haystack.length - needle.length; i++) {

        let matched = true;

        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                matched = false;
                break;
            }
        }
        if (matched) return i;
    }

    return -1;
}


// let haystack = "sadbutsad", needle = "sad";
let haystack = "hello", needle = "ll"

console.log("firstOccurance(haystack, needle)", firstOccurance(haystack, needle));