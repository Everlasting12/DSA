/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n) {
    let l = 1;
    let r = n;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        let pick = guess(m);

        if (pick === 0) {
            return m;
        }
        else if (pick == 1) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return -1;
};