function sumOfArray(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return nums[0] + sumOfArray(nums.slice(1));
}
function sumOfArrayCpp(nums, index = 0) {
  if (nums.length === index) {
    return 0;
  }
  return nums[index] + sumOfArrayCpp(nums, index + 1);
}

console.log("sumOfArray", sumOfArray([5, 3, 2, 0, 1]));
console.log("sumOfArrayCpp", sumOfArrayCpp([5, 3, 2, 0, 1]));
