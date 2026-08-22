function lengthOfLongestSubstring(s) {
    let l = 0, r = 0, maxL = 0, map = new Map();
    while (r < s.length) {
        let currChar = s[r];
        if (map.has(currChar) && map.get(currChar) >= l) {
            l = map.get(currChar) + 1;
            map.set(currChar, r);
        } else {
            map.set(currChar, r);
        }
        let currWindowSize = r - l + 1;
        maxL = Math.max(currWindowSize, maxL);
        r++;
    }
    return maxL;
};
//      0    1   2   3   4   5
//      p    w   w   k   e   w
console.log("Substring", lengthOfLongestSubstring("pwwkew"))