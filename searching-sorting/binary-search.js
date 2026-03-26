function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(
  "binarySearch",
  binarySearch([0, 2, 4, 7, 9, 10, 18, 20, 34, 45], 19),
);
