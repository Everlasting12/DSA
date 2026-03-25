function fibonacci(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function sumOfNFibonacci(n) {
  if (n === 0) return 0;

  return fibonacci(n) + sumOfNFibonacci(n - 1);
}

console.log("fibonacci(2)", fibonacci(8));
console.log("subOfNFibonacci(2)", sumOfNFibonacci(8));
