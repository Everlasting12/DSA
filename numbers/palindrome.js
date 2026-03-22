function isPalindrome(num) {
  if (num < 0) {
    return false;
  }

  let reverseNum = 0;
  let copyNum = num;

  while (num > 0) {
    let reminder = num % 10;
    reverseNum = reverseNum * 10 + reminder;
    num = Math.floor(num / 10);
  }
  return reverseNum === copyNum;
}

console.log("299 is Palindrome ", isPalindrome(299));
console.log("121 is Palindrome ", isPalindrome(121));
