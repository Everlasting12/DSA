/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (h, n) {
    let hl = h.length;
    let nl = n.length;

    let i = 0;
    let j = 1;
    let lps = [0];

    while (j < nl) {

        if (n[i] === n[j]) {
            lps[j] = i + 1;
            ++i; ++j;
        }
        else {
            if (i === 0) {
                lps[j] = 0;
                ++j;
            }
            else {
                i = lps[i - 1]
            }
        }
    }

    i = 0;
    j = 0;

    while (i < hl) {
        if (n[j] === h[i]) {
            ++i;
            ++j;
        }
        else {
            if (j === 0) {
                ++i;
            } else {
                j = lps[j - 1]
            }
        }
        if (j === nl) {
            return i - nl;
        }
    }

    return -1;
}

