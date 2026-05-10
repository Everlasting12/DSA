function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;
    let sToT = new Map();
    let tToS = new Map();

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];


        if (sToT.has(charS)) {
            if (sToT.get(charS) !== charT) {
                return false;
            }
        }
        else {
            sToT.set(charS, charT)
        }

        if (tToS.has(charT)) {
            if (tToS.get(charT) !== charS) {
                return false
            }
        } else {
            tToS.set(charT, charS);
        }

    }
    return true;
}

// 
let s = "egg", t = "add";
// let s = "f11", t = "b23";
// let s = "paper", t = "title"
// let s = "ab", t = "cc"

console.log('isIsomorphic(s, t)', isIsomorphic(s, t))