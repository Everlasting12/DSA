import { Stack } from "./stack.mjs"

function removeOutermostParenthese(s) {
    const stack = new Stack();
    let result = '';

    for (let i = 0; i < s.length; i++) {

        if (s[i] == "(") {
            stack.push(s[i]);
            let size = stack.size();
            if (size > 1) {
                result += s[i];
            }
        } else {
            let size = stack.size();
            if (size > 1) {
                result += s[i];
            }
            stack.pop()
        }
    }
    return result;
}

// Note: you can replace the stack and use a counter like level

console.log('removeOutermostParenthese 1', removeOutermostParenthese("(()())(())"))
console.log('removeOutermostParenthese 2', removeOutermostParenthese("(()())(())(()(()))"))
console.log('removeOutermostParenthese 3', removeOutermostParenthese("()()"))