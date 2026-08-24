/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l=0, r=0,maxLen = 0, maxFreq = 0, map = {};

    while(r < s.length) {
        map[s[r]] ? map[s[r]]++: map[s[r]]=1;
        maxFreq = Math.max(maxFreq, map[s[r]]);

        while((r - l + 1) - maxFreq > k) {
            map[s[l]]--;
            for(let [,ele] of Object.entries(map)) {
                maxFreq = Math.max(maxFreq, ele) 
            }
            l = l + 1;
        }
        if( (r-l + 1) - maxFreq <=k) {
            maxLen = Math.max(maxLen, r-l + 1)
        }
        r++
    }

    return maxLen
};