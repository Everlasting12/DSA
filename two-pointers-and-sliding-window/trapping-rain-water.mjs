function trappedWater(arr) {
    let n = arr.length;
    let maxL = []
    maxL[0] = [arr[0]];

    let maxR = []
    maxR[n - 1] = [arr[n - 1]];

    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(maxL[i - 1], arr[i]);
        maxR[n - i - 1] = Math.max(maxR[n - i], arr[n - i - 1]);
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i]
        sum = sum + Math.max(waterTrapped, 0);
    }
    return sum
}

function trappedWaterApproach2(arr) {
    let n = arr.length, leftMax = 0, rightMax = 0, water = 0;
    let l = 0, r = n - 1;
    while (l < r) {
        if (arr[l] < arr[r]) {
            water += Math.max(0, leftMax - arr[l]);
            leftMax = Math.max(arr[l], leftMax);
            l++
        } else {
            water += Math.max(0, rightMax - arr[r]);
            rightMax = Math.max(arr[r], rightMax);
            r--
        }
    }
    return water
}