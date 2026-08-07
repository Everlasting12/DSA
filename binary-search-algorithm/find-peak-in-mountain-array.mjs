function peakIndexInMountainArray(arr) {
    let l = 0;
    let r = arr.length - 1;

    // [0,2,3,4,1,0]
    // [0,5,4,3,1,0]

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        if (arr[m] < arr[m + 1]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return r;
};