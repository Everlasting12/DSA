function reverseString(s) {
  let middleIndex = Math.floor(s.length / 2);
  for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
    if (i == middleIndex) {
      break;
    }
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
  return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
