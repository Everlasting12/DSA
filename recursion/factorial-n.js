function factorial(n) {
  if (n === 0) return 1n;

  return BigInt(n) * factorial(n - 1);
}

console.log("factorial(1)", factorial(1));
console.log("factorial(2)", factorial(2));
console.log("factorial(3)", factorial(3));
console.log("factorial(4)", factorial(4));
console.log("factorial(5)", factorial(5));
console.log("factorial(8)", factorial(8));
console.log("factorial(10)", factorial(10));
console.log("factorial(20)", factorial(20));
