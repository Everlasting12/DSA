function reverse(num) {
  if (num === 0) return 0;

  const sign = num < 0 ? -1 : 1;
  num = Math.abs(num);

  let rev = 0;
  const MAX = 2 ** 31 - 1;

  while (num > 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);

    if (
      rev > Math.floor(MAX / 10) ||
      (rev === Math.floor(MAX / 10) && digit > 7)
    ) {
      return 0;
    }

    rev = rev * 10 + digit;
  }

  return rev * sign;
}

reverse(123); // 321
reverse(-456); // -654
reverse(120); // 21
