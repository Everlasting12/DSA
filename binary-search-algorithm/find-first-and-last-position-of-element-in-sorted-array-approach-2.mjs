/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let ans = [-1, -1];

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] < target) {
            l = m + 1;
        } else if (nums[m] === target) {
            ans[0] = m;
            r = m - 1;
        } else {
            r = m - 1;
        }
    }

    l = 0;
    r = nums.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] < target) {
            l = m + 1;
        } else if (nums[m] === target) {
            ans[1] = m;
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return ans;
};
