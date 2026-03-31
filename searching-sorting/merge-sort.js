function sortArray(arr) {
  const n = arr.length;
  if (n <= 1) return arr;

  const mid = Math.floor(n / 2);
  const left = sortArray(arr.slice(0, mid));
  const right = sortArray(arr.slice(mid));

  return mergeArrays(left, right);
}

function mergeArrays(arr1, arr2) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    res.push(...arr1.slice(i));
  }
  if (j < arr2.length) {
    res.push(...arr2.slice(j));
  }

  return res;
}

// console.log("mergeArrays", mergeArrays([2, 4, 6, 8], [1, 3, 5, 7]));
console.log("sortArray", sortArray([7, 30, 3, 5, 2, 6, 9, 11, 10, 8, 1]));
