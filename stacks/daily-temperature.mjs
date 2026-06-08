function dailyTemperatures(t) {
    let s = [];
    let n = t.length;
    let ans = Array(n).fill(0);


    s.push(n - 1);
    ans[n - 1] = 0;


    for (let i = n - 2; i >= 0; i--) {
        while (s.length) {
            let top = s.at(-1)
            if (t[i] >= t[top]) {
                s.pop()
                // keep poping elements based on condition
            } else {
                ans[i] = top - i;
                break;
                // break the loop
            }
        }

        if (!s.length) {
            ans[i] = 0;
        }

        s.push(i)
    }

    return ans

};

let temperatures = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70];

console.log('dailyTemperatures', dailyTemperatures(temperatures))