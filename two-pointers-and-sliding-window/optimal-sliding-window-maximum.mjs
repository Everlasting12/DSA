/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let i = 0;
    let j = k - 1;
    let ans = []
    let max = findMax(nums.slice(i, j + 1));
    ans[0] = max;
    ++i; ++j;
    while (j < nums.length) {
        max = Math.max(max, nums[j]);
        ans.push(max);
        ++i; ++j
    }
    return ans;
};

function findMax(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
    }
    return max;
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;

console.log("maxSlidingWindow(nums, k)", maxSlidingWindow(nums, k))