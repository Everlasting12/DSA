function missingNumber(nums) {
  let totalSum = (nums.length * (nums.length + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return totalSum - sum;
}

console.log("missingNumber", missingNumber([3, 0, 1, 2, 5]));
