function numJewelsInStones(jewels, stones) {
    let jewelCount = 0;
    let set = new Set();


    for (let j = 0; j < jewels.length; j++) {
        set.add(jewels[j]);
    }

    for (let s = 0; s < stones.length; s++) {
        if (set.has(stones[s])) {
            jewelCount++
        }
    }

    return jewelCount
}
// function numJewelsInStones(jewels, stones) {
//     let jewelCount = 0;
//     let map = new Map();

//     for (let i = 0; i < stones.length; i++) {
//         let curr = stones[i]
//         if (map.has(curr)) {
//             let currCount = map.get(curr) + 1
//             map.set(curr, currCount)
//         } else {
//             map.set(curr, 1)
//         }
//     }

//     for (let j = 0; j < jewels.length; j++) {
//         let curr = jewels[j]
//         if (map.has(curr)) {
//             jewelCount += map.get(curr)
//         }
//     }

//     return jewelCount
// }

const jewels = "aA"
const stones = "aAAbbbb"

console.log("numJewelsInStones(jewels, stones)", numJewelsInStones(jewels, stones))