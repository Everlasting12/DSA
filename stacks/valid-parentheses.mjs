function isValidParenthese(s) {

    if (s.length % 2 !== 0) return false;

    let map = {
        '}': '{',
        ']': '[',
        ')': '(',
    }

    let stack = [];

    for (let ch of s) {
        if (ch === '[' || ch === '{' || ch === '(') {
            stack.push(ch);
        } else {
            if (stack.pop() !== map[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}




console.log("isValidParenthese", isValidParenthese("()"))
console.log("isValidParenthese", isValidParenthese("()[]{}"))
console.log("isValidParenthese", isValidParenthese("(]"))
console.log("isValidParenthese", isValidParenthese("([])"))
console.log("isValidParenthese", isValidParenthese("([)]"))