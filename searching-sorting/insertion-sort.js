function insertionSort(a) {
  for (i = 1; i < a.length; i++) {
    let curr = a[i];
    let prev = i - 1;

    while (a[prev] > curr && prev >= 0) {
      a[prev + 1] = a[prev];
      prev--;
    }

    a[prev + 1] = curr;
  }

  return a;
}

console.log(
  "insertionSort(a)",
  insertionSort([7, 30, 3, 5, 2, 6, 9, 11, 10, 8, 1]),
);
