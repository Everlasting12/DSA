function isPowerOfTwo(n) {
  if (n === 1) return true;
  else if (n < 1 || n % 2 !== 0) return false;

  return isPowerOfTwo(n / 2);
}

console.log("isPowerOfTwo(6)", isPowerOfTwo(6));
console.log("isPowerOfTwo(16)", isPowerOfTwo(16));
