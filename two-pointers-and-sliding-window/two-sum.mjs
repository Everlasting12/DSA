function twoSum(nums, target) {
    let l = 0;
    let r = 1;

    while (l < r) {
        if ((nums[l] + nums[r]) === target) {
            return [l, r]
        }
        if (r === nums.length - 1) {
            l++;
            r = l + 1;
        } else {
            r++
        }
    }

};

function twoSumMap(nums, target) {
    let map = {};

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        map[element] = index;
    }

    for (let index = 0; index < nums.length; index++) {
        let diff = target - nums[index];
        if (map[diff] && map[diff] !== index) {
            return [index, map[diff]]
        }
    }
}