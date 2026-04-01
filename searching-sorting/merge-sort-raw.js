function mergeSortRaw(nums, low, high) {
    if (low === high) return;

    const mid = Math.floor((low + high) / 2);

    mergeSortRaw(nums, low, mid);
    mergeSortRaw(nums, mid + 1, high);
    merge(nums, low, mid, high)
}

function merge(nums, low, mid, high) {

    let left = low;
    let right = mid + 1;
    let temp = []
    while (left <= mid && right <= high) {
        if (nums[left] <= nums[right]) {
            temp.push(nums[left]);
            left++
        } else {
            temp.push(nums[right]);
            right++
        }
    }

    while (left <= mid) {
        temp.push(nums[left]);
        left++
    }
    while (right <= high) {
        temp.push(nums[right]);
        right++
    }

    for (let i = low; i <= high; i++) {
        nums[i] = temp[i - low];
    }
}

const arr = [7, 30, 3, 5, 2, 6, 9, 11, 10, 8, 1];
mergeSortRaw(arr, 0, arr.length - 1)
console.log("mergeSortRaw", arr)