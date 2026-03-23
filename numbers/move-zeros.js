function moveZeroesInPlace(nums) {
  let p1 = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] !== 0) {
      nums[p1] = nums[i];
      p1++;
    }
    i++;
  }

  while (p1 < nums.length) {
    nums[p1] = 0;
    p1++;
  }
}

let nums = [0, 1, 0, 3, 12];
moveZeroesInPlace(nums);
console.log("moveZeroesInPlace", nums);
