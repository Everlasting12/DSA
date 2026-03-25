function sumOfN(n) {
  if (n === 0) return 0;

  return n + sumOfN(n - 1);
}

function sumOfNFormula(n) {
  return (n * (n + 1)) / 2;
}

console.log("sumOfN(n)", sumOfN(15));
console.log("sumOfNFormula(n)", sumOfNFormula(15));
