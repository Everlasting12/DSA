function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let middle = Math.floor((right + left) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
console.log(
  "binarySearch",
  binarySearch([0, 2, 4, 7, 9, 10, 18, 20, 34, 45], 19),
);
