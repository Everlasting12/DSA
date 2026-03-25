// 0 1 2 3 4 5 6  7  8  9  10
// 0 1 1 2 3 5 8 13  21

function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n == 0) return 0;
  if (n == 1) return 1;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log("fibonacci(2)", fibonacci(2));
console.log("fibonacci(3)", fibonacci(3));
console.log("fibonacci(4)", fibonacci(4));
console.log("fibonacci(8)", fibonacci(8));
