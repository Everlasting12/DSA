function maxArea(arr) {
    let i = 0;
    let j = arr.length - 1;
    let maxArea = 0;
    while (i < j) {
        //  area = height x width 
        let area = Math.min(arr[j], arr[i]) * (j - i);
        maxArea = Math.max(area, maxArea);

        if (arr[i] > arr[j]) {
            --j;
        } else {
            ++i;
        }
    }
    return maxArea;
}