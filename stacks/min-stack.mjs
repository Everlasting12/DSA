
var MinStack = function () {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (!this.stack.length) {
        this.stack.push([val, val])
    } else {
        let minVal = Math.min(val, this.stack?.at(-1)?.at(-1));
        this.stack.push([val, minVal]);
    }
};


/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack.at(-1)?.at(0)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack.at(-1)?.at(-1)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */