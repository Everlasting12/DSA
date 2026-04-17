

function lengthOfLastWord(s) {

    let lastWordLength = 0;

    let isCharHit = false
    let isSpaceHit = false

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            isCharHit = true;
            lastWordLength++
        } else {
            isSpaceHit = true
            if (isCharHit) {
                break;
            }
        }
    }

    return lastWordLength
}
function lengthOfLastWord2(s) {
    let i = s.length - 1;
    let length = 0;

    // skip trailing spaces
    while (i >= 0 && s[i] === " ") {
        i--;
    }

    // count last word
    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }

    return length;
}

let str1 = "   fly me   to   the moon  ";
let str2 = "Hello World";
let str3 = "luffy is still joyboy";
let str4 = "";
let str5 = "HHHHH";

[str1, str2, str3, str4, str5].forEach(element => {
    console.log("lengthOfLastWord ", element, "-->", lengthOfLastWord(element))

});