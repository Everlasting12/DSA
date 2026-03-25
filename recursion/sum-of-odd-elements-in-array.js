function sumOfOddElementsFromArray(nums, index = 0) {
  if (nums.length === index) {
    return 0;
  }
  const isOdd = nums[index] % 2 !== 0;

  return (isOdd ? nums[index] : 0) + sumOfOddElementsFromArray(nums, index + 1);
}

function sumOdd(nums, index = 0, acc = 0) {
  if (index === nums.length) return acc;

  if (nums[index] % 2 !== 0) {
    acc += nums[index];
  }

  return sumOdd(nums, index + 1, acc);
}

console.log(
  "sumOfOddElementsFromArray",
  sumOfOddElementsFromArray([5, 3, 2, 0, 1]),
);
console.log("sumOdd", sumOdd([5, 3, 2, 0, 1]));
