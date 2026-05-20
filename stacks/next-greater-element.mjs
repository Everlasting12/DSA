// NGE - Next Greater Element;

function nextGeaterElement(n1, n2) {
    // keeping track of numbers from n2 and its next greater element as key:value pair
    let map = {};
    // stack to hold the next value from n2
    let s = [];

    // length of the n2 array;
    let n = n2.length;

    // pushing last element in stack , because there will be no greater element in the n2 for n2.at(-1) position so its NGE will be -1
    s.push(n2[n - 1]);
    // storing its key value pair in map as well  i.e. { lastElement : -1 }
    map[n2[n - 1]] = -1;

    // starting the loop from 2nd last element,as we have already covered the last element from n2 array;
    for (let i = n - 2; i >= 0; i--) {

        // if stack has elements in it then compare the current element from n2 with stack.top()
        while (s.length) {
            // if current element is greater than stack.top(), then keep on poping the stack until the greater element is found 
            if (n2[i] > s.at(-1)) {
                s.pop();
            }
            else {
                // if after poping the stack, found a element from stack then assign that as a NGE for the current element from the n2 in the map
                map[n2[i]] = s.at(-1);
                // break the loop as we got the NGE from the stack;
                break;
            }
        }

        // if the stack is empty which means we did not get any NGE from the stack so we are marking the current element with -1 in the map
        if (!s.length) {
            map[n2[i]] = -1;
        }

        // push every element in the stack for comparison for the next iteration
        s.push(n2[i])
    }

    // finally return the counterpart of n1 array element from the map;
    return n1.map(elem => map[elem])
}

console.log('nextGeaterElement(n1, n2)', nextGeaterElement([4, 1, 2], [1, 3, 4, 2]))
console.log('nextGeaterElement(n1, n2)', nextGeaterElement([2, 4], [1, 2, 3, 4]))