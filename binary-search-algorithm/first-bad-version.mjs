/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion) {

    return function (n) {
        let l = 1;
        let r = n;
        //                          B   B   B   B   B   B
        //      1   2   3   4   5   6   7   8   9   10  11
        // 1 -> L                   M                   R
        // 2 -> L       M           R
        // 2 ->             L   M   R
        // 3 ->                   (LMR)    

        while (l < r) {
            let mid = l + Math.floor((r - l) / 2);

            if (!isBadVersion(mid)) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        return r;
    };
};