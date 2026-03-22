function removeDuplcateElementsInPlace(arr) {
  let replaceIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[replaceIndex]) {
      replaceIndex += 1;
      arr[replaceIndex] = arr[i];
    }
  }

  return { k: replaceIndex + 1, arr };
}

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(
  "removeDuplcateElementsInPlace(arr)",
  removeDuplcateElementsInPlace(arr),
);
