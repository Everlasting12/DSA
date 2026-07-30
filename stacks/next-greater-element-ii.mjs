function nextGreaterElements(nums) {
    let n = nums.length;

    let stack = [];
    let ans = Array(n).fill(-1);

    stack.push(nums[n - 1]);


    for (let i = 2 * n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack.at(-1);
            if (nums[i % n] < top) {
                ans[i % n] = top;
                break;
            }
            else {
                stack.pop()
            }
        }

        stack.push(nums[i % n])
    }

    return ans;
}

let nums = [1, 2, 3, 4, 3];
console.log('nextGreaterElements', nextGreaterElements(nums));