function singleNonDuplicate(a) {
    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        // if pair is on left side
        if (a[m] === a[m - 1]) {
            let leftCount = m - 1 - l;
            // if odd array is on left side
            if (leftCount % 2 === 1) {
                r = m - 2;
            } else {
                l = m + 1
            }
        }
        else if (a[m] === a[m + 1]) {
            let rightCount = r - m + 1;
            // if odd array on right side
            if (rightCount % 2 === 1) {
                l = m + 2;
            } else {
                r = m - 1;
            }
        } else {
            return a[m];
        }
    }
};
/**
    0   1   2   3   4   5   6   7   8
    [1, 1,  2,  3,  3,  4,  4,  8,  8]
1   L               M               R
2   L   M   R
3   

 */