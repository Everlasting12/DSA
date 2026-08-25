/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let i = 0, j = 0;
    let ans = [];
    let q = [];

    while (j < nums.length) {
        while (q.length && nums[j] > q.at(-1)) {
            q.pop();
        }
        q.push(nums[j]);
        if (j >= k - 1) {
            ans.push(q.at(0));
            if (q.at(0) === nums[i]) {
                q.shift();
            }
            ++i;
        }
        ++j;
    }
    return ans;
};


let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;

console.log("maxSlidingWindow(nums, k)", maxSlidingWindow(nums, k))