function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

console.log("linearSearch", linearSearch([3, 4, 6, 7, 9, 4, 2, 5, 7], 6));
