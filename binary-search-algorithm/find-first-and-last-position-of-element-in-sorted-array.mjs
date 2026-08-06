/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    let ans = [-1, -1];
    let s = startIndex(l, r, nums, target);
    let e = endIndex(l, r, nums, target);


    if (s == target) ans[0] = s;
    if (e == target) ans[1] = e;

    return ans;
};

function startIndex(l, r, nums, target) {

    while (l < r) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return r;
}
function endIndex(l, r, nums, target) {

    while (l < r) {
        let m = l + Math.ceil((r - l) / 2);

        if (nums[m] > target) {
            r = m - 1;
        } else {
            l = m;
        }
    }
    return l;

}