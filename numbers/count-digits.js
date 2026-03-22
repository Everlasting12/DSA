function countDigits(num) {
  if (num === 0) {
    return 1;
  }

  n = Math.abs(num);

  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}

countDigits(0); // 1
countDigits(123); // 3
countDigits(-4567); // 4
