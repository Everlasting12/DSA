

const array = [12, 45, 33, 54, 45]

// [120, 21]
function minimumAbsoluteDistanceBetweenMirrorPair(nums) {
    const map = new Map();
    let minDistance = Infinity;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (map.has(num)) {
            minDistance = Math.min(minDistance, i - map.get(num));
        }

        const rev = reverseNumber(num);
        // store both directions
        map.set(rev, i);
    }

    return minDistance === Infinity ? -1 : minDistance;

}

function reverseNumber(num) {
    let rev = 0;
    num = Math.abs(num);

    while (num > 0) {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10)

    }
    return rev
}


console.log("minimumAbsoluteDistanceBetweenMirrorPair: ", minimumAbsoluteDistanceBetweenMirrorPair(array))
console.log("minimumAbsoluteDistanceBetweenMirrorPair: ", minimumAbsoluteDistanceBetweenMirrorPair([120, 21]))
console.log("minimumAbsoluteDistanceBetweenMirrorPair: ", minimumAbsoluteDistanceBetweenMirrorPair([21, 120]))

