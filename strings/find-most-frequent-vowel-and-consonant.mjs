function maxFreqSum(s) {
    let map = {}

    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (map[curr]) {
            ++map[curr]
        } else {
            map[curr] = 1
        }
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxConsonant = 0;

    for (let i = 0; i < s.length; i++) {
        let curr = s[i]
        if (vowels.includes(curr)) {
            if (map[curr] > maxVowel) {
                maxVowel = map[curr];
            }
        } else {
            if (map[curr] > maxConsonant) {
                maxConsonant = map[curr];
            }
        }
    }
    return maxConsonant + maxVowel;

};

console.log("maxFreqSum('abciiidef')", maxFreqSum('abciiidef'))