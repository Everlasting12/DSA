

function removeOutermostParenthese(s) {
    let level = 0;
    let result = '';

    for (let i = 0; i < s.length; i++) {

        if (s[i] == "(") {
            ++level;
            if (level > 1) {
                result += s[i];
            }
        } else {
            if (level > 1) {
                result += s[i];
            }
            --level;
        }
    }
    return result;
}

console.log('removeOutermostParenthese 1', removeOutermostParenthese("(()())(())"))
console.log('removeOutermostParenthese 2', removeOutermostParenthese("(()())(())(()(()))"))
console.log('removeOutermostParenthese 3', removeOutermostParenthese("()()"))