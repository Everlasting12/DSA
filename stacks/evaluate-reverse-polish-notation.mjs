function evaluateReversePolishNotation(t) {
    let s = [];

    let map = {
        "+": (a, b) => (b + a),
        "-": (a, b) => (b - a),
        "*": (a, b) => (b * a),
        "/": (a, b) => Math.trunc(b / a),
    };

    for (let i = 0; i < t.length; i++) {
        if (["+", "-", "*", "/"].includes(t[i])) {
            let a = s.pop();
            let b = s.pop();

            let ans = map[t[i]](Number(a), Number(b));
            s.push(ans)
        } else {
            s.push(t[i]);
        }
    }

    return Number(s.pop());
}

console.log(
    "evaluateReversePolishNotation 1",
    evaluateReversePolishNotation(["2", "1", "+", "3", "*"]),
);
console.log(
    "evaluateReversePolishNotation 2",
    evaluateReversePolishNotation(["4", "13", "5", "/", "+"]),
);
console.log(
    "evaluateReversePolishNotation 3",
    evaluateReversePolishNotation([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
    ]),
);
