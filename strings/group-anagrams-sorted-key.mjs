function groupAnagram(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const sortedElement = mergeSort(element.split("")).join("");
        if (!map.has(sortedElement)) {
            map.set(sortedElement, [])
        }
        map.get(sortedElement).push(element)
    }

    return Array.from(map.values())
}


function mergeSort(arr) {

    // base case
    if (arr.length <= 1) return arr;


    // divide
    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // merge
    return merge(left, right)
}

function merge(left, right) {

    let result = [];

    let i = 0;
    let j = 0;


    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result
}


console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));