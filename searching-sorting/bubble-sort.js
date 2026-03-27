function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // let swap = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = swap;

        // -------- or -----------
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }
  return arr;
}

const nums = [3, 600, 1, 30, 8, 0, 34, 5, 7, 89, 2, 43, 5, 6];

console.log("bubbleSort", bubbleSort(nums));
