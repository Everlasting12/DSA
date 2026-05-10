function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;
    let sToT = new Map();
    let tToS = new Map();

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        if (sToT.has(charS) || tToS.has(charT)) {
            if (sToT.get(charS) !== charT || tToS.get(charT) !== charS) {
                return false;
            }
        }
        else {
            sToT.set(charS, charT)
            tToS.set(charT, charS);
        }

    }
    return true;
}

console.log('isIsomorphic(s, t)', isIsomorphic("egg", "add"))
console.log('isIsomorphic(s, t)', isIsomorphic("f11", "b23"))
console.log('isIsomorphic(s, t)', isIsomorphic("paper", "title"))
console.log('isIsomorphic(s, t)', isIsomorphic("ab", "cc"))