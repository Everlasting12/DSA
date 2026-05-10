function groupAnagram(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];


        const count = new Array(26).fill(0);

        for (let j = 0; j < word.length; j++) {
            let index = word.charCodeAt(j) - 97   // a -> 97, A -> 65
            count[index]++
        }

        // build unique key
        let key = ""
        for (let k = 0; k < 26; k++) {
            if (count[k] > 0) {
                key += String.fromCharCode(k + 97) + count[k];
            }
        }

        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(word)
    }

    return Array.from(map.values())
}



console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));