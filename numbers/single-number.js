function singleNumber(nums) {
  let xor = 0;

  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
}

console.log("singleNumber", singleNumber([2, 2, 1])); // 1
